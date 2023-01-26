const { ipcRenderer } = require("electron");

timer = document.getElementById("timer");

focus_mode = document.getElementById("focus-mode");
shortbreak_mode = document.getElementById("shortbreak-mode");
longbreak_mode = document.getElementById("longbreak-mode");

// Get Data from JSON file
const fs = require("fs");
function loadJSON(filename = "") {
  return JSON.parse(
    fs.existsSync(filename) ? fs.readFileSync(filename).toString() : "null"
  );
}

data = loadJSON("config.json");

focus_mode.addEventListener("click", () => {
  timer.innerHTML = data.time_data.focus_time;
});

shortbreak_mode.addEventListener("click", () => {
  timer.innerHTML = data.time_data.short_break;
});

longbreak_mode.addEventListener("click", () => {
  timer.innerHTML = data.time_data.long_break;
});

document.getElementById("settings-mode").addEventListener("click", () => {
  console.log("open settings");
  ipcRenderer.send("openSettings");
});
