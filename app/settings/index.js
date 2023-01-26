// reading from  a json file
const fs = require("fs");

function saveChangedData(data) {
  data.dark_theme = document.getElementById("dark-theme").checked;
  data.time_data.focus_time = document.getElementById("focus-time").value;
  data.time_data.short_break = document.getElementById("shortbreak-time").value;
  data.time_data.long_break = document.getElementById("longbreak-time").value;

  return data;
}

function loadJSON(filename = "") {
  return JSON.parse(
    fs.existsSync(filename) ? fs.readFileSync(filename).toString() : "null"
  );
}

function saveJSON(filename = "", json = '""') {
  return fs.writeFileSync(filename, JSON.stringify(json));
}

const data = loadJSON("config.json");

document.getElementById("save-btn").addEventListener("click", () => {
  updated_data = saveChangedData(data);
  saveJSON("config.json", updated_data);
  console.log("Updated Data: \n" + loadJSON("config.json"));
});
