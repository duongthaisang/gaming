window.Telegram.WebApp.ready();
let user = Telegram.WebApp.initDataUnsafe?.user;
if (user) {
    document.getElementById("userInfo").innerText = `Người chơi: ${user.first_name}`;
}
