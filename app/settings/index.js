// reading from  a json file
const fs = require("fs");
const { ipcRenderer } = require("electron");

function saveChangedData(data) {
  data.dark_theme = document.getElementById("dark-theme").checked;
  data.time_data.focus_time = document.getElementById("focus-time").value;
  data.time_data.short_break = document.getElementById("shortbreak-time").value;
  data.time_data.long_break = document.getElementById("longbreak-time").value;
  data.always_on_top = document.getElementById("always-on-top").checked;

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

if (data.time_data.focus_time) {
  document.getElementById("focus-time").value = data.time_data.focus_time;
  document.getElementById("shortbreak-time").value = data.time_data.short_break;
  document.getElementById("longbreak-time").value = data.time_data.long_break;
}
if (data.always_on_top) {
  document.getElementById("always-on-top").checked = data.always_on_top;
}

save_btn = document.getElementById("save-btn");
save_btn.addEventListener("click", () => {
  updated_data = saveChangedData(data);
  saveJSON("config.json", updated_data);
  console.log("Updated Data: \n" + loadJSON("config.json"));
  save_btn.innerHTML = "Saved!";
  ipc.send("ReloadMain");
  ipc.send("closeSetting");
});
