import MediaPlayer from "../MediaPlayer";

class AutoPlay{
    constructor(){}

    run(player:MediaPlayer){
        if(!player.media.muted){
            player.media.muted=true;
        }
        player.play();
        setTimeout(function(){
            //player.unmute();
        },500);
    }

}


export default AutoPlay;