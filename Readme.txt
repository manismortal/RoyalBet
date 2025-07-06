RoyalBet (CK444-style) Platform - Deploy Guide

- index.html, login.html, register.html ... সব page ফোল্ডারে রাখুন।
- css/style.css, js/main.js, img/, music/, games/, config/, admin/ — সব folder structure মেনে রাখুন।
- Localhost-এ python http server (python -m http.server) দিয়ে রান করুন, বা xampp/wamp।
- config/games.json, offers.json, winners.json, upcoming.json edit করলেই সব page live update হবে।
- admin/local-panel.html (offline/local config), admin/index.html (secured backend panel)।
- Bangla-English নোট/কমেন্ট সব কোডে আছে।
- নতুন গেম add করতে games/ ফোল্ডার + config/games.json-এ entry দিন।
