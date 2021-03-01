
//Welcome Audio
let startAudioLink = "audio/start.ogg"
let welcomeAudio = new Audio(startAudioLink);
welcomeAudio.addEventListener("canplaythrough",()=>{

})
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
from1To5Audio.addEventListener("canplaythrough",()=>{

})
// Correct Answer
let correctAnswerLink = "audio/correctfrom1to4.ogg";
let correctAnswerAudio = new Audio(correctAnswerLink);
correctAnswerAudio.addEventListener("canplaythrough",()=>{

})
function playCorrectAnswer() {
    correctAnswerAudio.play();
}
function stopCorrectAnswer(){
    correctAnswerAudio.pause();
}
// Wrong Answer
let wrongAnswerLink = "audio/wrong-answer.mp3";
let wrongAnswerAudio = new Audio(wrongAnswerLink);
wrongAnswerAudio.addEventListener("canplaythrough",()=>{

})
function playWrongAnswer() {
    wrongAnswerAudio.play();
}
function stopWrongAnswer(){
    wrongAnswerAudio.pause();
}
export {
    playWelcomeAudio,
    stopWelcomeAudio,
    playFrom1To5Audio,
    stopFrom1To5Audio,
    playCorrectAnswer,
    stopCorrectAnswer,
    playWrongAnswer,
    stopWrongAnswer,
}