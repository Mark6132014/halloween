alert("Welcome to the Halloween Website!\nWhere you can see something about Halloween, fun facts, and Did you know? Facts!");
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
