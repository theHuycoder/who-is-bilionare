
//Welcome Audio
let startAudioLink = "audio/start.mp3"
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
//Win Quest 5
let winQuest5Link = "audio/winquest5.mp3";
let winQuest5Audio = new Audio(winQuest5Link);
winQuest5Audio.addEventListener("canplaythrough",()=>{

})
function playWinQuest5Audio() {
    winQuest5Audio.play();
}
function stopWinQuest5Audio() {
    winQuest5Audio.pause();
}
// From 6 Quest
let from6QuestLink = "audio/from6quest.mp3";
let from6QuestAudio = new Audio(from6QuestLink);
function playFrom6QuestAudio() {
    from6QuestAudio.loop = true;
    from6QuestAudio.play();
}
function stopFrom6QuestAudio() {
    from6QuestAudio.pause();
}
// 50:50
let audio5050Link = "audio/5050.mp3";
let audio5050 = new Audio(audio5050Link);
audio5050.addEventListener("canplaythrough",()=>{

});
function playAudio5050() {
    audio5050.play();
}
function stopAudio5050() {
    audio5050.pause();
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
    playAudio5050,
    stopAudio5050,
    playWinQuest5Audio,
    stopWinQuest5Audio,
    playFrom6QuestAudio,
    stopFrom6QuestAudio
}