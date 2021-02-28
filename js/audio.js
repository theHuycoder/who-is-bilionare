//Welcome Audio
let startAudioLink = "audio/start.ogg"
let welcomeAudio = new Audio(startAudioLink);
function playWelcomeAudio() {
    welcomeAudio.play();
}
function stopWelcomeAudio() {
    welcomeAudio.pause();
}
//from 1 To 5 Audio
let from1To5link = "audio/question1to5.ogg";
let from1To5Audio = new Audio(from1To5link);
function playFrom1To5Audio(){
    from1To5Audio.play();
}
function stopFrom1To5Audio() {
    from1To5Audio.pause();
}
export {
    playWelcomeAudio,
    stopWelcomeAudio,
    playFrom1To5Audio,
    stopFrom1To5Audio
}