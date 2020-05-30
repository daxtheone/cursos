import MediaPlayer from './MediaPlayer.ts';
import AutoPlay from './plugins/AutoPlay.ts';
import AutoPause from './plugins/AutoPause.ts';
//como estamos en typescript quitamos las extensiones ts si queremos

const video=document.querySelector("video")
const player = new MediaPlayer({el : video , plugins : [
    new AutoPlay(), new AutoPause()
]});


const button_play=document.querySelector("#button_play");
button_play.onclick = () => player.togglePlay();

const button_mute=document.querySelector("#button_mute");
button_mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message);
    });
} 