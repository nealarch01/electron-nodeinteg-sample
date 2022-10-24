const { contextBridge } = require("electron");
const { getNodeVersion, echoMessage } = require("./node-proc.js");

contextBridge.exposeInMainWorld("main", {
    version: () => getNodeVersion(),
    writeToFile: (message) => echoMessage(message)
});