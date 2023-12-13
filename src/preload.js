const { contextBridge, ipcRenderer } = require("electron");
// Expose ipcRenderer to the client
const API = {
  send: (event, msg) => {
    ipcRenderer.send(event, msg);
  },
  receive: (channel, func) => {
    // Deliberately strip event as it includes `sender`
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
};

contextBridge.exposeInMainWorld("api", API);
