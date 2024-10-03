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
document.addEventListener("DOMContentLoaded", () => {
    // Initialize account display based on localStorage
    if (localStorage.getItem("username") === null && localStorage.getItem("alert") === null) {
        document.querySelector("#account").innerText = "Account";
        document.querySelector("#alert").checked = false;
        document.querySelector("#name").innerText = ""; // Clear the contenteditable element
    } else {
        document.querySelector("#account").innerText = localStorage.getItem("username");
        document.querySelector("#alert").checked = (localStorage.getItem("alert") === 'true');
        document.querySelector("#name").innerText = localStorage.getItem("username"); // Set contenteditable value
    }

    // Event listener for the submit button
    document.querySelector(".submitAccount").addEventListener("click", () => {
        let alertCheckbox = document.querySelector("#alert");
        let usernameInput = document.querySelector("#name");

        // Save the checkbox state and username to localStorage
        localStorage.setItem("alert", alertCheckbox.checked);
        localStorage.setItem("username", usernameInput.innerText); // Use innerText for contenteditable

        // Hide the account modal
        document.querySelector(".account").style.display = "none";
    });

    // Toggle modal display on account click
    document.querySelector("#account").addEventListener("click", () => {
        let modal = document.querySelector(".account");
        modal.style.display = (modal.style.display === "none") ? "block" : "none";
    });

    // Initially hide the account modal
    document.querySelector(".account").style.display = "none";
});
