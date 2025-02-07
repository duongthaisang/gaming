let userId = null;

window.onload = function () {
    if (window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
        let user = window.Telegram.WebApp.initDataUnsafe.user;
        userId = user.id;
        document.getElementById("userInfo").innerText = `Người chơi: ${user.first_name}`;
    }
    updateBalanceDisplay();
};
