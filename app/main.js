const { app, BrowserWindow, ipcMain } = require("electron");
let SettingWin;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 460,
    height: 275,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("home/index.html");
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  ipcMain.on("closeApp", () => {
    mainWindow.close();
  });
  ipcMain.on("minApp", () => {
    mainWindow.minimize();
  });
  ipcMain.on("openSettings", () => {
    SettingWin = new BrowserWindow({
      height: 500,
      width: 350,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      // resizable: false,
    });
    SettingWin.loadFile("settings/index.html");
  });
  ipcMain.on("closeSettings", () => {
    SettingWin.close();
  });
  ipcMain.on("minSettings", () => {
    SettingWin.minimize();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
