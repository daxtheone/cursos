import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
//como estamos en typescript quitamos las extensiones ts

const video: HTMLElement=document.querySelector("video")
const player:MediaPlayer = new MediaPlayer({el : video , plugins : [
    new AutoPlay(), new AutoPause()
]});


const button_play: HTMLElement=document.querySelector("#button_play");
button_play.onclick = () => player.togglePlay();

const button_mute: HTMLElement=document.querySelector("#button_mute");
button_mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message);
    });
} 