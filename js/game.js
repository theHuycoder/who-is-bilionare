import {endStartGameAudio, playQuestion1To5} from "./audio.js";
import questions from "./question.js";

const btnStart = document.getElementById("btn-start");
const header = document.getElementById("header");
const questionShow = document.getElementById("question-show");
const answersShow = document.getElementById("answers-show");
let questionsGroup = questions[Math.floor(getRandomNumber(0, 1))];
let currentIndex = 0;
function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min);
}

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
    console.log(answers);
    console.log(randomTrueIndex);
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
            setTimeout(()=>{
                otherAnswer[randomTrueIndex].classList.add("bg-success");
                if (i === randomTrueIndex){
                    currentIndex+=1;
                    setTimeout(()=>{
                        answersShow.innerHTML = "";
                        questionShow.innerHTML = "";
                        onGame(currentIndex);
                    },1000);
                }else{

                }
            },2000)
        }
        createDiv.addEventListener("click", clickAnswer);
    }

}

btnStart.addEventListener("click", () => {

    endStartGameAudio();
    playQuestion1To5();
    header.classList.add("d-none");
    onGame(currentIndex);
});
