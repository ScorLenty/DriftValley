const {app,BrowserWindow,Menu}=require('electron');const path=require('path');
function create(){
  const w=new BrowserWindow({width:1280,height:720,fullscreen:true,autoHideMenuBar:true,backgroundColor:'#1d2a22',
    webPreferences:{contextIsolation:true}});
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname,'..','www','index.html'));
  w.webContents.on('before-input-event',(e,i)=>{
    if(i.type==='keyDown'&&i.key==='F11'){w.setFullScreen(!w.isFullScreen());e.preventDefault()}
    if(i.type==='keyDown'&&i.key==='Escape'&&w.isFullScreen()){w.setFullScreen(false)}
  });
}
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
