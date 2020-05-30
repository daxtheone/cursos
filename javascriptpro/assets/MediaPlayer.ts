
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        /*const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        */
        this.plugins.forEach(plugins => {
            plugins.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        let estatus = this.media.paused;
        (estatus) ? this.media.play() : this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        let estatus = this.media.muted;
        this.media.muted = (estatus) ? false : true;
    }
}

export default MediaPlayer;