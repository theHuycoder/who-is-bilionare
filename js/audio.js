const audioTag = document.createElement("audio");
const sourceTag = document.createElement("source");
sourceTag.type= "audio/ogg";
audioTag.crossOrigin = "anonymous";
// Audio sources
const startAudioLink = "audio/start.ogg"
const questions1To5AudioLink = "audio/question1to5.ogg";
// Start Game//
function playStartGameAudio() {
    sourceTag.src = startAudioLink;
    audioTag.appendChild(sourceTag);
    audioTag.crossOrigin = "anonymous";
    audioTag.autoplay = true;
}
function endStartGameAudio() {
    audioTag.pause();
}
window.onload = ()=>{
    playStartGameAudio();
}
function playQuestion1To5() {
    audioTag.id = "question1to5";
    sourceTag.type = "audio/ogg";
    sourceTag.src = questions1To5AudioLink;
    audioTag.appendChild(sourceTag);
    audioTag.autoplay = true;
    document.body.appendChild(audioTag);
}
// In game 1 to 5

export {
    endStartGameAudio,
    playQuestion1To5
}
