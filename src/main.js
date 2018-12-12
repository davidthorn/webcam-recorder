"use strict";
/// <reference path="../node_modules/mocha-typescript/globals.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.app.on('ready', () => {
    const window = new electron_1.BrowserWindow({
        width: 1000,
        height: 600,
        backgroundColor: '#222222',
        fullscreen: true
    });
    window.loadFile('src/index.html');
    window.webContents.openDevTools();
    console.log('app ready');
});
//# sourceMappingURL=main.js.map