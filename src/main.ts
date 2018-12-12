/// <reference path="../node_modules/mocha-typescript/globals.d.ts"/>

import {app, BrowserWindow} from 'electron'

app.on('ready' , () => {


    const window = new BrowserWindow({
        width: 1000,
        height: 600,
        backgroundColor: '#222222',
        fullscreen: true
    })
    
    window.loadFile('src/index.html')
    window.webContents.openDevTools()
    console.log('app ready')
})