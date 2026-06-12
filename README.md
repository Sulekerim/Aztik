<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Proqram Azbeysk - Bütün proqramlar bir yerdə</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f2b3d 0%, #1a4a6f 100%);
            color: #f0f4f8;
            padding: 20px;
        }
        .container {
            max-width: 1300px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
            font-size: 2.5rem;
            margin: 20px 0 10px;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .basliq-alt {
            text-align: center;
            margin-bottom: 40px;
            color: #cce7f5;
            font-size: 1.1rem;
        }
        .search-box {
            text-align: center;
            margin-bottom: 40px;
        }
        #search {
            width: 90%;
            max-width: 500px;
            padding: 14px 20px;
            border-radius: 50px;
            border: none;
            font-size: 1rem;
            outline: none;
            background: #ffffff;
            color: #1a2a3a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .category {
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            margin-bottom: 30px;
            padding: 20px;
            backdrop-filter: blur(5px);
        }
        .category h2 {
            font-size: 1.8rem;
            border-left: 5px solid #ffb74d;
            padding-left: 15px;
            margin-bottom: 20px;
        }
        .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 15px;
        }
        .app-card {
            background: rgba(0,0,0,0.3);
            padding: 12px 18px;
            border-radius: 14px;
            transition: 0.2s;
            border-left: 3px solid #ffb74d;
        }
        .app-card strong {
            font-size: 1.2rem;
            display: block;
            margin-bottom: 6px;
            color: #ffd966;
        }
        .app-card p {
            font-size: 0.9rem;
            opacity: 0.9;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            font-size: 0.85rem;
            border-top: 1px solid rgba(255,255,255,0.2);
        }
        @media (max-width: 700px) {
            h1 { font-size: 1.8rem; }
            .category h2 { font-size: 1.4rem; }
            .apps-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
<div class="container">
    <h1>📱 PROQRAM AZBEYSK</h1>
    <div class="basliq-alt">Bütün mövzularda ən yaxşı proqramlar – Reklam, Əyləncə, Oyun, Təhsil və daha çox</div>

    <div class="search-box">
        <input type="text" id="search" placeholder="🔍 Proqram axtar... (məsələn: WhatsApp, Oyun, Reklam)" onkeyup="filterApps()">
    </div>

    <div id="apps-container">
        <!-- Kateqoriyalar -->
        <div class="category" data-category="reklam">
            <h2>📢 Reklam & Marketinq</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>Google Ads / AdMob</strong><p>Axtarış, YouTube və tətbiq içi reklamlar üçün lider platforma.</p></div>
                <div class="app-card"><strong>Meta Ads Manager</strong><p>Facebook & Instagram reklamlarını idarə et.</p></div>
                <div class="app-card"><strong>TikTok Ads Manager</strong><p>Viral video reklamlar üçün ən güclü alət.</p></div>
                <div class="app-card"><strong>AppLovin</strong><p>Oyun reklamlarında ən yüksək gəlir.</p></div>
                <div class="app-card"><strong>Mintegral</strong><p>Asiya bazarı üçün nömrə 1.</p></div>
            </div>
        </div>

        <div class="category" data-category="əyləncə">
            <h2>🎬 Əyləncə & Video</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>YouTube</strong><p>Dünyanın ən böyük video platforması.</p></div>
                <div class="app-card"><strong>Netflix</strong><p>Seriallar, filmlər, orijinal içerik.</p></div>
                <div class="app-card"><strong>Twitch</strong><p>Canlı oyun yayımları və esport.</p></div>
                <div class="app-card"><strong>TikTok</strong><p>Qısa əyləncə videoları.</p></div>
                <div class="app-card"><strong>Spotify</strong><p>Musiqi və podkastlar.</p></div>
                <div class="app-card"><strong>YouTube Music</strong><p>Rəsmi musiqi platforması.</p></div>
            </div>
        </div>

        <div class="category" data-category="oyun">
            <h2>🎮 Oyunlar</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>Subway Surfers</strong><p>Ən populyar qaçış oyunu.</p></div>
                <div class="app-card"><strong>Candy Crush</strong><p>Tapmaca oyunlarının kralı.</p></div>
                <div class="app-card"><strong>Call of Duty Mobile</strong><p>Yüksək keyfiyyətli döyüş oyunu.</p></div>
                <div class="app-card"><strong>PUBG Mobile</strong><p>Battle royale janrının lideri.</p></div>
                <div class="app-card"><strong>Among Us</strong><p>Əyləncəli multiplayer oyun.</p></div>
            </div>
        </div>

        <div class="category" data-category="təhsil">
            <h2>📚 Təhsil</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>Duolingo</strong><p>Pulsuz dil öyrənmə tətbiqi.</p></div>
                <div class="app-card"><strong>Khan Academy</strong><p>Riyaziyyat, elm, proqramlaşdırma – tam pulsuz.</p></div>
                <div class="app-card"><strong>Coursera</strong><p>Dünya universitetlərindən sertifikatlı kurslar.</p></div>
                <div class="app-card"><strong>Quizlet</strong><p>Kartlarla əzbərləmə və testlər.</p></div>
            </div>
        </div>

        <div class="category" data-category="mesajlaşma">
            <h2>💬 Mesajlaşma & Sosial</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>WhatsApp</strong><p>Mesaj, zəng, şəkil paylaşımı.</p></div>
                <div class="app-card"><strong>Telegram</strong><p>Kanallar, qruplar, fayl göndərmək.</p></div>
                <div class="app-card"><strong>Instagram</strong><p>Şəkil və hekayə paylaşımı.</p></div>
                <div class="app-card"><strong>Facebook</strong><p>Sosial şəbəkə.</p></div>
            </div>
        </div>

        <div class="category" data-category="alış-veriş">
            <h2>🛒 Alış-veriş & Xidmət</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>Bolt</strong><p>Taksi, yemək çatdırılma.</p></div>
                <div class="app-card"><strong>Uber</strong><p>Taksi və sürücü xidmətləri.</p></div>
                <div class="app-card"><strong>Tap / Google Pay</strong><p>Pul köçürmə və ödənişlər.</p></div>
                <div class="app-card"><strong>Amazon</strong><p>Hər şeyi almaq üçün.</p></div>
            </div>
        </div>

        <div class="category" data-category="sağlamlıq">
            <h2>⚕️ Sağlamlıq & Fitnes</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>MyFitnessPal</strong><p>Kalori və qidalanma izləmə.</p></div>
                <div class="app-card"><strong>Google Fit / Samsung Health</strong><p>Gündəlik aktivlik sayğacı.</p></div>
                <div class="app-card"><strong>Calm / Headspace</strong><p>Meditasiya və yuxu üçün.</p></div>
            </div>
        </div>

        <div class="category" data-category="foto">
            <h2>📸 Foto & Dizayn</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>Snapseed</strong><p>Peşəkar şəkil redaktəsi.</p></div>
                <div class="app-card"><strong>Canva</strong><p>Afişa, CV, sosial media postları.</p></div>
                <div class="app-card"><strong>CapCut</strong><p>Video montaj.</p></div>
                <div class="app-card"><strong>Google Photos</strong><p>Limitsiz şəkil yaddaşı.</p></div>
            </div>
        </div>

        <div class="category" data-category="naviqasiya">
            <h2>🗺️ Naviqasiya & Səyahət</h2>
            <div class="apps-grid">
                <div class="app-card"><strong>Google Maps</strong><p>Canlı xəritə, trafik, naviqasiya.</p></div>
                <div class="app-card"><strong>Waze</strong><p>Sürücülər üçün real vaxt məlumatı.</p></div>
                <div class="app-card"><strong>Booking / Airbnb</strong><p>Otel və ev rezervasiyası.</p></div>
            </div>
        </div>
    </div>
    <div class="footer">
        Proqram Azbeysk © 2026 - Hər mövzuda ən yaxşı proqramlar bir yerdə
    </div>
</div>

<script>
    function filterApps() {
        let input = document.getElementById('search').value.toLowerCase();
        let categories = document.querySelectorAll('.category');
        
        categories.forEach(category => {
            let cards = category.querySelectorAll('.app-card');
            let anyVisible = false;
            
            cards.forEach(card => {
                let text = card.innerText.toLowerCase();
                if (text.includes(input) || input === "") {
                    card.style.display = "block";
                    anyVisible = true;
                } else {
                    card.style.display = "none";
                }
            });
            
            if (anyVisible || input === "") {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });
    }
</script>
</body>
</html>
