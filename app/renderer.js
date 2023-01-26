const { ipcRenderer } = require("electron");
ipc = ipcRenderer;

document.getElementById("close").addEventListener("click", () => {
  ipc.send("closeApp");
});
document.getElementById("min").addEventListener("click", () => {
  ipc.send("minApp");
});
