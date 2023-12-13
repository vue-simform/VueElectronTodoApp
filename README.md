# electronvuetodoapp

## Feautures
## Demo 🔍

Here is the Demo Link for simple electronJs todo app [Link](https://www.kapwing.com/w/yiUcC6B8X4)

## Features ✨
 
- **Cross-Platform Development**: Allows developers to build desktop applications that run seamlessly on multiple operating systems, including Windows, macOS, and Linux.
- **Native API Access**:Provides access to native desktop features and APIs using Node.js modules.
- **Chromium Engine**: Electron utilizes the Chromium rendering engine, the same engine that powers Google Chrome.
- **Node.js Integration**: Electron seamlessly integrates with Node.js, allowing developers to use server-side JavaScript in their desktop applications.
- **Auto-Updating**: Electron simplifies the process of implementing automatic updates for desktop applications.
- **Single Codebase**: With Electron, developers can maintain a single codebase for their desktop applications. 

### Prerequisites
Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

### Install dependencies
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run electron:serve
```
## Built With
Vue.js 3
Electron

## Add ElectronJs to Vue Project

- **Add Electron in vue project** 
```bash
npm install electron --save-dev

```
- **Add Elctron Builder in project**
```bash
vue add electron-builder

```
- **Configure Electron**: Update your package.json file with Electron-specific configurations. 
```bash
"main": "background.js",
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "electron:serve": "vue-cli-service electron:serve",
  "electron:build": "vue-cli-service electron:build"
},

```
- **Create Electron Main File**: Create a background.js file in your project root to serve as the Electron main file. This file should create an Electron window and load your Vue.js app:

```bash
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('dist/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});


```

## Project Structure


```
your-project/
├── /src/                   # Vue.js source code
│   ├── /assets/            # Vue.js assets (images, styles, etc.)
│   ├── /components/        # Vue.js components
│   ├── /views/             # Vue.js views or pages
│   ├── background.js       # Electron main process entry point
│   ├── preload.js          # Electron preload script
│   ├── App.vue             # Vue.js main component
│   └── main.js             # Vue.js entry point
├── /public/                # Public assets (static files)
├── /dist/                  # Vue.js build output
├── /dist_electron/         # Electron build output
├── package.json            # Node.js project configuration
├── README.md               # Project documentation (you are here)
└── ...                     # Other project files and folders

```

## Electron Builder
This project uses Electron Builder for packaging and distributing your Electron app.

```bash
npm run electron:build

```
The packaged app will be available in the dist/ directory.

## Reference:
- [Blog](https://medium.com/simform-engineering/building-cross-platform-desktop-apps-with-electron-vite-vue-3-and-electron-builder-724598092a92)
- [Vue CLI](https://cli.vuejs.org/)
- [Electron Builder](https://www.electron.build/)

## Author

Nancy Solanki ([nancy.solanki@simformsolutions.com](mailto:nancy.solanki@simformsolutions.com))

