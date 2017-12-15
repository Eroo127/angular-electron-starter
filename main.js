const electron = require('electron'); 

const { app, BrowserWindow } = electron;

let window;

function createWindow () {

  // Create the new browser window.
  window = new BrowserWindow({
    width: 800, 
    height: 700,
    backgroundColor: '#ffffff',
  });


 //set the URL to the angular build folder index.html file
  window.loadURL(`file://${__dirname}/dist/index.html`)  
   
  
  // What happens when the window closes.
  window.on('closed', function () {

    window = null

  });
}

// Create window when electron is initialized
app.on('ready', createWindow)

// Close process.
app.on('window-all-closed', function () {
  if (process.platform !== 'win32') {
    app.quit()
  }
});