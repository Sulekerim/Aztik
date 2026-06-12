const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');
const auth = require('../middleware/auth');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiting - spam-ı qarşısını almaq üçün
const messageLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 dəqiqə
  max: 10, // maksimum 10 mesaj
  message: 'Çox tez mesaj göndərdiniz. Zəhmət olmasa gözləyin.'
});

/**
 * GET /messages
 * Son 50 mesajı al
 */
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find()
      .populate('user', 'username avatar')
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      data: messages.reverse(),
      count: messages.length
    });
  } catch (err) {
    console.error('Mesajlar alınarkən xəta:', err);
    res.status(500).json({
      success: false,
      error: 'Mesajları almaq mümkün olmadı'
    });
  }
});

/**
 * POST /message
 * Yeni mesaj göndər
 */
router.post('/message', auth, messageLimiter, async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.user.id;

    // Validasiya
    if (!text || text.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Mesaj boş ola bilməz'
      });
    }

    if (text.length > 2000) {
      return res.status(400).json({
        success: false,
        error: 'Mesaj çox uzundur (maksimum 2000 simvol)'
      });
    }

    // İstifadəçini tap
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'İstifadəçi tapılmadı'
      });
    }

    // Yeni mesaj yarat
    const message = new Message({
      user: userId,
      username: user.username,
      text: text.trim(),
      avatar: user.avatar,
      createdAt: new Date()
    });

    // Mesajı yadda saxla
    await message.save();
    await message.populate('user', 'username avatar');

    res.status(201).json({
      success: true,
      data: message,
      message: 'Mesaj uğurla göndərildi'
    });

  } catch (err) {
    console.error('Mesaj göndərilərkən xəta:', err);
    res.status(500).json({
      success: false,
      error: 'Mesaj göndərmək mümkün olmadı'
    });
  }
});

/**
 * DELETE /message/:id
 * Mesajı sil (yalnız sahibi)
 */
router.delete('/message/:id', auth, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Mesaj tapılmadı'
      });
    }

    // Yalnız sahibi silə bilər
    if (message.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        error: 'Bu əməliyyata icazə yoxdur'
      });
    }

    await Message.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Mesaj silindi'
    });

  } catch (err) {
    console.error('Mesaj silinərkən xəta:', err);
    res.status(500).json({
      success: false,
      error: 'Mesaj silmək mümkün olmadı'
    });
  }
});

module.exports = router;
