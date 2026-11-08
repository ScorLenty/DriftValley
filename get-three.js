// Скачивает three.js локально, чтобы игра работала без интернета (exe и APK)
const https=require('https'),fs=require('fs'),p='www/lib/three.min.js';
if(fs.existsSync(p)&&fs.statSync(p).size>100000){console.log('three.js уже есть');process.exit(0)}
fs.mkdirSync('www/lib',{recursive:true});
https.get('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',r=>{
  if(r.statusCode!==200){console.error('Ошибка загрузки',r.statusCode);process.exit(1)}
  r.pipe(fs.createWriteStream(p)).on('finish',()=>console.log('three.js скачан'))
}).on('error',e=>{console.error(e.message);process.exit(1)});
