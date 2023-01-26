const { ipcRenderer } = require("electron");
ipc = ipcRenderer;

document.getElementById("SettingClose").addEventListener("click", () => {
  ipc.send("closeSetting");
  console.log("closemsetting");
});
document.getElementById("SettingMin").addEventListener("click", () => {
  ipc.send("minSetting");
});
