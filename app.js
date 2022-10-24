const { app, BrowserWindow, ipc } = require("electron");
const { exec } = require("child_process");
const path = require("path");

// const { getNodeVersion } = require("./node-proc.js");

let window 

// https://stackoverflow.com/questions/69717050/run-a-command-line-from-inside-a-js-function-using-electron-js
function createMainWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "preload.js")
        },
    });
    window.loadFile(`index.html`);
}


function main() {
    app.on("ready", () => {
        // console.log(getNodeVersion());
        createMainWindow();
        exec(`echo 'App ready' >> log.txt`);
    });
    
    app.on("window-all-closed", () => {
        // On Windows and Linux, the default behavior is to close the app when all windows are closed.
        // On macOS, the default behavior is to keep the app running until the user explicitly quits.
        if (process.platform !== "darwin") { // Darwin == macOS
            app.quit(); // Implements the default behavior for Windows and Linux
        }
    });
    
    app.on("activate", () => {
        // On MacOS, the default behavior is to re-create a window in the app when the dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
}




main();