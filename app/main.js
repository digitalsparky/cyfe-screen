const {app, BrowserWindow, session} = require('electron');
const path = require('path')
const url = require('url')
let mainWindow

app.on('ready', () => {
  const settings = require('electron-settings');
  if (!settings.get('dashboard_ids')) {
    console.log("No dashboard id's, please check configuration");
    if (process.platform !== 'darwin') {
      app.quit();
    }
    return;
  }
  if (!settings.get('dashboard_rotate')) {
    console.log("No dashboard rotate time (seconds), please check configuration");
    if (process.platform !== 'darwin') {
      app.quit();
    }
    return;
  }
  session.defaultSession.webRequest.onHeadersReceived({}, (d, c) => {
    const filter = ['x-frame-options'];
    let headerNames = Object.keys(d.responseHeaders);
    headerNames.forEach((headerName) => {
      if (headerName.toLowerCase() == "x-frame-options") {
        delete d.responseHeaders[headerName];
      }
    })

    c({cancel: false, responseHeaders: d.responseHeaders, statusLine: d.statusLine});
  })

  mainWindow = new BrowserWindow({webPreferences: { webSecurity: false }, kiosk: false, title: "Cyfe Screen", autoHideMenuBar: true, alwaysOnTop: true})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
