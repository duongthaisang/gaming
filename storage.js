function getBalance() {
    return localStorage.getItem('playerMoney') ? parseInt(localStorage.getItem('playerMoney')) : 50000;
}

function updateBalance(amount) {
    localStorage.setItem('playerMoney', amount);
    updateBalanceDisplay();
}

function updateBalanceDisplay() {
    document.getElementById("balance").innerText = getBalance();
    document.getElementById("gameBalance").innerText = getBalance();
}
