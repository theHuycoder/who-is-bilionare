import {
    playWelcomeAudio, stopWelcomeAudio, playFrom1To5Audio, stopFrom1To5Audio,
    playCorrectAnswer, stopCorrectAnswer, playWrongAnswer, stopWrongAnswer
} from "./audio.js";
import questions from "./question.js";

const btnStart = document.getElementById("btn-start");
const header = document.getElementById("header");
const playField = document.getElementById("play-field");
const questionShow = document.getElementById("question-show");
const answersShow = document.getElementById("answers-show");
const score = document.getElementById("score");
const scoreShow = document.getElementById("score-show");
const moneyShow = document.getElementById("money-show");
const endGame = document.getElementById("end-game");
const finalMoney = document.getElementById("final-money");
const btnReset = document.getElementsByClassName("reset");
const milionare = document.getElementById("milionare");
let questionsGroup = questions[Math.floor(getRandomNumber(0, 2))];
let currentIndex = 0; // cau hoi hien tai
function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min);
}

// shuffle cau tra loi dung
function shuffleAnswersGivenIndex(arr, randomNumber) {
    let indexOfTrueAnswer = arr.findIndex(item => item.correct === true);
    let [item] = arr.splice(indexOfTrueAnswer, 1);
    arr.splice(randomNumber, 0, item);
}

function onGame(current) {
    let currentQuestion = questionsGroup[current];
    let {answers} = currentQuestion;
    let randomTrueIndex = Math.floor(getRandomNumber(0, 4));
    shuffleAnswersGivenIndex(answers, randomTrueIndex)
    questionShow.innerText = currentQuestion.quest;
    for (let i = 0; i < answers.length; i++) {
        let createDiv = document.createElement("div");
        createDiv.classList.add("col-6");
        createDiv.classList.add("answer")
        createDiv.classList.add("bg-answer")
        answersShow.appendChild(createDiv);
        switch (i) {
            case 0:
                createDiv.textContent = `A. ${answers[i].ans}`;
                break;
            case 1:
                createDiv.textContent = `B. ${answers[i].ans}`;
                break;
            case 2:
                createDiv.textContent = `C. ${answers[i].ans}`;
                break;
            case 3:
                createDiv.textContent = `D. ${answers[i].ans}`;
                break;
            default:
                break;
        }
        const clickAnswer = () => {
            createDiv.classList.add("bg-answer-choose");
            let otherAnswer = answersShow.children;
            for (let i = 0; i < otherAnswer.length; i++) {
                otherAnswer[i].style.pointerEvents = "none";
            }
            setTimeout(() => {
                otherAnswer[randomTrueIndex].classList.add("bg-correct");
                otherAnswer[randomTrueIndex].classList.add("blink-1");
                if (i === randomTrueIndex) {
                    playCorrectAnswer();
                    currentIndex += 1;
                    setTimeout(() => {
                        answersShow.innerHTML = "";
                        questionShow.innerHTML = "";
                        scoreShow.innerHTML = (currentIndex + 1).toString();
                        switch (currentIndex) {
                            case 1:
                                moneyShow.innerText = 100;
                                break;
                            case 2:
                                moneyShow.innerText = 200;
                                break;
                            case 3:
                                moneyShow.innerText = 300;
                                break;
                            case 4:
                                moneyShow.innerText = 500;
                                break;
                            case 5:
                                moneyShow.innerText = 1000;
                                break;
                            case 6:
                                moneyShow.innerText = 2000;
                                break;
                            case 7:
                                moneyShow.innerText = 3000;
                                break;
                            case 8:
                                moneyShow.innerText = 5000;
                                break;
                            case 9:
                                moneyShow.innerText = 7000;
                                break;
                            case 10:
                                moneyShow.innerText = 10000;
                                break;
                            case 11:
                                moneyShow.innerText = 13000;
                                break;
                            case 12:
                                moneyShow.innerText = 15000;
                                break;
                            case 13:
                                moneyShow.innerText = 18000;
                                break;
                            case 14:
                                moneyShow.innerText = 20000;
                                break;
                            case 15:
                                moneyShow.innerText = 30000;
                                break;
                            default:
                                moneyShow.innerText = 0;
                                break;
                        }
                        if (currentIndex === 15){
                            playField.classList.add("d-none");
                            score.classList.add("d-none");
                            milionare.classList.remove("d-none");
                        }else {
                            onGame(currentIndex);
                        }
                    }, 2000);
                } else {
                    otherAnswer[randomTrueIndex].classList.add("bg-correct");
                    otherAnswer[randomTrueIndex].classList.add("blink-1");
                    playWrongAnswer();
                    stopFrom1To5Audio();
                    setTimeout(()=>{
                        playField.classList.add("d-none");
                        endGame.classList.remove("d-none");
                        score.classList.add("d-none");
                        finalMoney.innerText = moneyShow.innerText;
                    },4000)
                }
            }, 2000);
        }

        createDiv.addEventListener("click", clickAnswer);
    }
}

window.onload = () => {
    playWelcomeAudio();
}
btnStart.addEventListener("click", () => {
    stopWelcomeAudio();
    playFrom1To5Audio();
    header.classList.add("d-none");
    score.classList.remove("d-none");
    moneyShow.innerHTML = 0;
    playField.classList.remove("d-none");
    scoreShow.innerHTML = (currentIndex + 1).toString();
    onGame(currentIndex);
});
for (let i =0; i <btnReset.length;i++){
    btnReset[i].addEventListener("click",()=>{
        location.reload();
    })
}