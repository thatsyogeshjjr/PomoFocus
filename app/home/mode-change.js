const { ipcRenderer } = require("electron");

timer = document.getElementById("timer");

focus_mode = document.getElementById("focus-mode");
shortbreak_mode = document.getElementById("shortbreak-mode");
longbreak_mode = document.getElementById("longbreak-mode");

focus_mode.addEventListener("click", () => {
  timer.innerHTML = "25:00";
});

shortbreak_mode.addEventListener("click", () => {
  timer.innerHTML = "05:00";
});

longbreak_mode.addEventListener("click", () => {
  timer.innerHTML = "15:00";
});

document.getElementById("settings-mode").addEventListener("click", () => {
  console.log("open settings");
  ipcRenderer.send("openSettings");
});
