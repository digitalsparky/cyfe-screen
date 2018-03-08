const {app, BrowserWindow, session} = require('electron');
const path = require('path')
const url = require('url')
let mainWindow

app.on('ready', () => {
  const settings = require('electron-settings');
  if (!settings.get('dashboard_id')) {
    console.log("No dashboard ID, please check configuration");
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

  mainWindow = new BrowserWindow({webPreferences: { webSecurity: false }, kiosk: true, title: "Cyfe Screen", autoHideMenuBar: true, alwaysOnTop: true})
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
