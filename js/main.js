function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}
function playGame(gameNum) {
  document.getElementById('gameModal').style.display = 'flex';
  document.getElementById('gameFrame').innerHTML = `
    <iframe src="games/game${gameNum}/index.html" width="330" height="420" style="border:0;border-radius:8px;"></iframe>
    <p style="text-align:center;">// এখানে তোমার গেমের iframe/embed/API call বসাও (নোট: ক্লায়েন্ট-এ logic রাখো না)</p>
  `;
}
function closeGameModal() {
  document.getElementById('gameModal').style.display = 'none';
  document.getElementById('gameFrame').innerHTML = "";
}
function toggleMusic() {
  let bgm = document.getElementById('bgm');
  if(bgm.paused) bgm.play(); else bgm.pause();
}
// Dynamic loader: offer, games, winner, result
fetch('config/offers.json')
  .then(r=>r.json()).then(offers=>{
    let html = '';
    offers.forEach(o=>{
      html += `<div class="offer-banner">${o.text}</div>`;
    });
    document.getElementById('offerSection').innerHTML = html;
});
fetch('config/games.json')
  .then(r=>r.json()).then(games=>{
    let html = '';
    games.forEach((g,i)=>{
      html += `<div class="game-card" onclick="playGame(${g.id})">
        <img src="${g.img}" alt="${g.name}">
        <span>${g.name}</span>
      </div>`;
    });
    document.getElementById('game-list').innerHTML = html;
});
fetch('config/winners.json')
  .then(r=>r.json()).then(wins=>{
    document.getElementById('luckyWinnerBar').innerHTML =
      wins.map(w=>`<span>${w.name} (${w.amount}৳)</span>`).join(' | ');
});
setInterval(()=>{
  let live = "Game " + (Math.floor(Math.random()*10)+1) + ": " +
    (Math.random()>0.5 ? "জিতেছে User123" : "জিতেছে UserABC") +
    " | " + new Date().toLocaleTimeString();
  let el = document.getElementById('liveResults');
  if(el) el.innerText = live;
}, 2000);
