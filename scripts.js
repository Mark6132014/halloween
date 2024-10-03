document.querySelector(".fullscreen").addEventListener("click", () => {
    document.documentElement.requestFullscreen((e) => {
        console.log(e);
    });
});
document.querySelector(".submitAccount").addEventListener("click", () => {
    let alertCheckbox = document.querySelector("#alert");
    let usernameInput = document.querySelector("#name");
    usernameInput.innerText = usernameInput.innerText;
    document.querySelector("#account").innerText = usernameInput.innerText;
    // Save the checkbox state and username to localStorage
    localStorage.setItem("alert", alertCheckbox.checked);
    localStorage.setItem("username", usernameInput.innerText); // Use innerText for contenteditable
    document.querySelector(".account").style.display = "none";
});

// Check if localStorage has values and set them accordingly
if (localStorage.alert !== null && localStorage.username !== null) {
    document.querySelector("#account").innerText = localStorage.getItem("username");
    document.querySelector("#alert").checked = (localStorage.getItem("alert") === 'true');
    document.querySelector("#name").innerText = localStorage.getItem("username");
}
document.querySelector(".account").style.display = "none";
document.querySelector("#account").addEventListener("click", () => {
    let modal = document.querySelector(".account");
    if (modal.style.display == "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});
/* Halloween countdown */
function updateCountdown() {
    const now = new Date();
    let nextHalloween = new Date(now.getFullYear(), 9, 31); // October 31st (month is 0-indexed)

    // If Halloween has already passed this year, set to next year
    if (now > nextHalloween) {
        nextHalloween.setFullYear(nextHalloween.getFullYear() + 1);
        if (localStorage.getItem("alert") == true) {
            alert("Halloween is starting! October 31st, 5PM!\nGet a'ready for'a trick or treatin'!");
        }
    }

    const timeRemaining = nextHalloween - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        // Calculate the progress
    const totalDuration = nextHalloween - new Date(nextHalloween.getFullYear(), 0, 1);
    const elapsed = now - new Date(nextHalloween.getFullYear(), 0, 1);
    const progress = (elapsed / totalDuration) * 100;
    document.getElementById('countdown').innerHTML = 
        `${days} days, ${hours} hours ${minutes} minutes ${seconds} seconds.`;
    document.querySelector('.progress').style.width = `${progress}%`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
