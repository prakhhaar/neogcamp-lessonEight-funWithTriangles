const quizForm = document.querySelector(".quiz-form");
const sumbitAnswerButton = document.querySelector("#submit-answers-button");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "Right", "1 right angle", "Equilateral", "10 cm"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your score is:" + score  + "/" + correctAnswers.length;
}

sumbitAnswerButton.addEventListener("click", calculateScore);