
function MediaPlayer(config){
    this.media=config.el;
    this.plugins =  config.plugins || [];
    this._initPlugins();
}
MediaPlayer.prototype._initPlugins = function(){
    const player = {
        play  : () => this.play(),
        pause : () => this.pause(),
        media : this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value){
            this.media.muted = value;
        }
    }
    this.plugins.forEach(plugins=>{
        plugins.run(player);
    });
} 
MediaPlayer.prototype.play= function(){
    this.media.play();
}
MediaPlayer.prototype.pause =  function(){
    this.media.pause();
}
MediaPlayer.prototype.togglePlay=function(){
    let estatus = this.media.paused;
    (estatus)?this.media.play():this.media.pause();
}
MediaPlayer.prototype.mute = function() {
    this.media.muted=true;
}
MediaPlayer.prototype.unmute = function() {
    this.media.muted=false;
}

MediaPlayer.prototype.toggleMute =function(){
    let estatus= this.media.muted;
    this.media.muted=(estatus)?false:true;
}
export default MediaPlayer;