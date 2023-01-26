const { ipcRenderer } = require("electron");
ipc = ipcRenderer;

if (document.getElementById("close")) {
  document.getElementById("close").addEventListener("click", () => {
    ipc.send("closeApp");
  });
  document.getElementById("min").addEventListener("click", () => {
    ipc.send("minApp");
  });
}
if (document.getElementById("SettingClose")) {
  document.getElementById("SettingClose").addEventListener("click", () => {
    ipc.send("closeSetting");
  });
  document.getElementById("SettingMin").addEventListener("click", () => {
    ipc.send("minSetting");
  });
}
