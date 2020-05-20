import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';


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