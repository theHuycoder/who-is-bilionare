// import audio, questions
import {
    playWelcomeAudio, stopWelcomeAudio, playFrom1To5Audio, stopFrom1To5Audio,
    playCorrectAnswer, stopCorrectAnswer, playWrongAnswer, stopWrongAnswer,
    playAudio5050,stopAudio5050, playWinQuest5Audio,stopWinQuest5Audio,playFrom6QuestAudio,stopFrom6QuestAudio
} from "./audio.js";
import questions from "./question.js";
// DOM Define
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
const millionaire = document.getElementById("millionaire");
const halfSupport = document.getElementById("half-half");
const skipQuest = document.getElementById("skip-quest");
let questionsGroup = questions[Math.floor(getRandomNumber(0, 2))];// chọn một bộ ngẫu nhiên
let currentIndex = 0; // cau hoi hien tai
// helpers function
function getRandomNumber(min, max) { // tra về một số ngẫu nhiên từ min đến max
    return (Math.random() * (max - min) + min);
}

// shuffle cau tra loi dung theo một index cho trước
function shuffleAnswersGivenIndex(arr, randomNumber) {
    let indexOfTrueAnswer = arr.findIndex(item => item.correct === true);
    let [item] = arr.splice(indexOfTrueAnswer, 1);
    arr.splice(randomNumber, 0, item);
}

// game function
function onGame(current) {
    let currentQuestion = questionsGroup[current];// lấy ra một câu hỏi theo index từ bộ câu hỏi
    let {answers} = currentQuestion;// lấy ra array kết quả của câu hỏi đó
    let randomTrueIndex = Math.floor(getRandomNumber(0, 4));// random vị trí đúng
    shuffleAnswersGivenIndex(answers, randomTrueIndex)// suffle đáp án đúng theo vị trí đã
    // random trong Arr đáp án
    questionShow.innerText = currentQuestion.quest;// In câu hỏi vào HTML
    const nextQuest = ()=>{ // Đến câu tiếp theo
        answersShow.innerHTML = "";// Dọn dẹp đáp án cũ
        questionShow.innerHTML = "";// Dọn dẹp câu hỏi cũ
        scoreShow.innerHTML = (currentIndex + 1).toString();// In câu tiếp theo
        switch (currentIndex) {// In tiền
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
        if (currentIndex === 5){
            let breakTime = 8;
            stopFrom1To5Audio();
            playWinQuest5Audio();
            score.classList.add("d-none");
            questionShow.innerHTML = "Chúc mừng bạn đã vượt qua 5 câu hỏi đầu tiên!! Nghỉ ngơi" +
                " chút nào!";
            let countDown = setInterval(()=>{
                breakTime-= 1;
                answersShow.innerHTML = `<h1 class="col-12 text-center">${breakTime}</h1>`;
                if (breakTime ===0){
                    clearInterval(countDown);
                    answersShow.innerHTML = "";
                    score.classList.remove("d-none");
                    playFrom6QuestAudio();
                    onGame(currentIndex);
                }
            },1000);
        }
        else if (currentIndex === 15) {// Nếu trả lời hết 15 câu
            playField.classList.add("d-none");
            score.classList.add("d-none");
            millionaire.classList.remove("d-none");
            stopFrom6QuestAudio();
            playWinQuest5Audio();
        } else {
            onGame(currentIndex);// Nếu trả lời đúng play lại game
        }
    }
    for (let i = 0; i < answers.length; i++) {// In 4 đáp án vào HTML
        let createDiv = document.createElement("div");
        createDiv.classList.add("col-6");
        createDiv.classList.add("answer")
        createDiv.classList.add("bg-answer")
        answersShow.appendChild(createDiv);
        switch (i) { // In theo thứ tự ABCD
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
        const clickAnswer = () => { // Thêm sự kiến click vào đáp án
            createDiv.classList.add("bg-answer-choose");
            let otherAnswer = answersShow.children; // Lấy ra DOM tất cả đáp án
            for (let i = 0; i < otherAnswer.length; i++) {
                otherAnswer[i].style.pointerEvents = "none";// Sau khi chọn thì chặn ko cho các
                // cái khác chọn
            }
            setTimeout(() => { // Sau một thời gian thì hiện đáp án đúng
                otherAnswer[randomTrueIndex].classList.add("bg-correct");
                otherAnswer[randomTrueIndex].classList.add("blink-1");
                if (i === randomTrueIndex) {// Nếu chọn đúng
                    playCorrectAnswer();// Bật âm thanh
                    currentIndex += 1;// Tăng số câu tiếp theo
                    setTimeout(() => {
                       nextQuest();
                    }, 2000);
                } else {// Trả lời sai thì dừng game
                    otherAnswer[randomTrueIndex].classList.add("bg-correct");
                    otherAnswer[randomTrueIndex].classList.add("blink-1");
                    playWrongAnswer();
                    stopFrom1To5Audio();
                    stopFrom6QuestAudio();
                    setTimeout(() => {
                        playField.classList.add("d-none");
                        endGame.classList.remove("d-none");
                        score.classList.add("d-none");
                        finalMoney.innerText = moneyShow.innerText;
                    }, 4000)
                }
            }, 2000);
        }
        createDiv.addEventListener("click", clickAnswer);
    }
    // Supports
    // 50:50 events
    let delete2FalseAnswers = [];
    halfSupport.onclick = () => {// dung onclick thay addEventListener de khong bi double
        // eventListener
        while (delete2FalseAnswers.length < 2) {
            let getRandomNumbToDelete = Math.floor(getRandomNumber(0, 4));// random 1 so
            if (delete2FalseAnswers.indexOf(getRandomNumbToDelete) === -1 && getRandomNumbToDelete !== randomTrueIndex) {
                // Neu số random chưa tồn tại trong array delete2FalseAnswer và khác
                // randomTrueIndex thì push vào
                delete2FalseAnswers.push(getRandomNumbToDelete);
            }
        }
        for (let i = 0; i < delete2FalseAnswers.length; i++) {
            answersShow.children[delete2FalseAnswers[i]].innerHTML = "";// Xoa dap an sai
            answersShow.children[delete2FalseAnswers[i]].style.pointerEvents = "none";// khong
            // co click dap an sai
        }
        playAudio5050();
        halfSupport.style.pointerEvents = "none"; // Disable 50:50
        halfSupport.disabled = true;
    }
    skipQuest.onclick = () => {
        playCorrectAnswer();
        answersShow.children[randomTrueIndex].classList.add("bg-correct");
        answersShow.children[randomTrueIndex].classList.add("blink-1");
        currentIndex += 1;
        setTimeout(() => {
            nextQuest();
        },2000);
        skipQuest.style.pointerEvents = "none";
        skipQuest.disabled = true;
    }
}

// Gán Event
window.onload = () => {
    playWelcomeAudio();
}
btnStart.addEventListener("click", () => {
    stopWelcomeAudio();
    header.classList.add("d-none");
    score.classList.remove("d-none");
    moneyShow.innerHTML = 0;
    playField.classList.remove("d-none");
    scoreShow.innerHTML = (currentIndex + 1).toString();
    playFrom1To5Audio();
    onGame(currentIndex);
});
for (let i = 0; i < btnReset.length; i++) {
    btnReset[i].addEventListener("click", () => {
        location.reload();
    })
}