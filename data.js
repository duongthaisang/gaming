let playerMoney = parseInt(localStorage.getItem('playerMoney')) || 50000;
let history = JSON.parse(localStorage.getItem('history')) || [];

function saveData() {
    localStorage.setItem('playerMoney', playerMoney);
    localStorage.setItem('history', JSON.stringify(history));
    updateBalance();
}

function loadLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    document.getElementById('leaderboard').innerHTML = leaderboard.map(p => `<li>${p.name}: ${p.money}</li>`).join('');
}

function loadHistory() {
    document.getElementById('history').innerHTML = history.map(h => `<li>${h.time} - ${h.result} - ${h.amount}</li>`).join('');
}
