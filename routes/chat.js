const express = require('express');
const Message = require('../models/Message');
const auth = require('../middleware/auth');

const router = express.Router();

// Mesajlar al
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find()
      .populate('user', 'username avatar')
      .sort({ createdAt: -1 })
      .limit(50);
    res.json(messages.reverse());
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server xətası');
  }
});

// Mesaj göndər (REST fallback)
router.post('/message', auth, async (req, res) => {
  try {
    const { text } = req.body;
    
    let user = await User.findById(req.user.id);
    
    const message = new Message({
      user: req.user.id,
      username: user.username,
      text,
      avatar: user.avatar
    });

    await message.save();
    await message.populate('user', 'username avatar');
    
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server xətası');
  }
});

module.exports = router;
