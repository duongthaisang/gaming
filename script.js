function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(el => el.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    updateBalance();
}

function startGame() {
    let bet = parseInt(document.getElementById('customBet').value);
    if (!bet || bet <= 0 || bet > playerMoney) {
        alert("Số tiền cược không hợp lệ!");
        return;
    }

    let deck = shuffleDeck();
    let playerHand = [deck.pop(), deck.pop(), deck.pop()];
    let dealerHand = [deck.pop(), deck.pop(), deck.pop()];

    let playerPoints = calculatePoints(playerHand);
    let dealerPoints = calculatePoints(dealerHand);

    document.getElementById('playerHand').innerText = JSON.stringify(playerHand);
    document.getElementById('dealerHand').innerText = JSON.stringify(dealerHand);
    document.getElementById('playerPoints').innerText = playerPoints;
    document.getElementById('dealerPoints').innerText = dealerPoints;

    let result = '';
    if (playerPoints > dealerPoints) {
        result = 'Thắng!';
        playerMoney += bet;
    } else if (playerPoints < dealerPoints) {
        result = 'Thua!';
        playerMoney -= bet;
    } else {
        result = 'Hòa!';
    }

    document.getElementById('result').innerText = result;
    saveData();
}

function updateBalance() {
    document.getElementById('balance').innerText = playerMoney;
    document.getElementById('gameBalance').innerText = playerMoney;
}
