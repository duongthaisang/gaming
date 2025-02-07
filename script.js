const suits = ["♠", "♣", "♦", "♥"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffleDeck() {
    let deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
    return deck.sort(() => Math.random() - 0.5);
}

function drawHand() {
    let deck = shuffleDeck();
    return [deck.pop(), deck.pop(), deck.pop()];
}

function calculatePoints(hand) {
    let points = 0;
    for (let card of hand) {
        if (["J", "Q", "K"].includes(card.value)) {
            points += 10;
        } else if (card.value === "A") {
            points += 1;
        } else {
            points += parseInt(card.value);
        }
    }
    return points % 10;
}

function startGame() {
    let betAmount = parseInt(document.getElementById("betAmount").value);
    if (betAmount <= 0 || betAmount > getBalance()) {
        alert("Số tiền cược không hợp lệ!");
        return;
    }

    let playerHand = drawHand();
    let dealerHand = drawHand();

    let playerPoints = calculatePoints(playerHand);
    let dealerPoints = calculatePoints(dealerHand);

    document.getElementById("playerHand").innerText = JSON.stringify(playerHand);
    document.getElementById("dealerHand").innerText = JSON.stringify(dealerHand);
    document.getElementById("playerPoints").innerText = playerPoints;
    document.getElementById("dealerPoints").innerText = dealerPoints;

    let result = "Hòa!";
    if (playerPoints > dealerPoints) {
        result = "Bạn thắng!";
        updateBalance(getBalance() + betAmount);
    } else if (playerPoints < dealerPoints) {
        result = "Bạn thua!";
        updateBalance(getBalance() - betAmount);
    }

    document.getElementById("result").innerText = result;
}
