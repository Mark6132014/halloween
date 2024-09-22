document.querySelector(".game1").addEventListener("click", () => {
    let GameClient = window.open("https://mark6132014.github.io/catchMe", "popup", "height=600,width=800");
    GameClient.focus();
    GameClient.moveTo(230, 50);
});
document.querySelector(".fullscreen").addEventListener("click", () => {
    document.documentElement.requestFullscreen((e) => {
        console.log(e);
    });
});
/* Halloween countdown */
function updateCountdown() {
    const now = new Date();
    let nextHalloween = new Date(now.getFullYear(), 9, 31); // October 31st (month is 0-indexed)

    // If Halloween has already passed this year, set to next year
    if (now > nextHalloween) {
        nextHalloween.setFullYear(nextHalloween.getFullYear() + 1);
    }

    const timeRemaining = nextHalloween - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display countdown immediately
