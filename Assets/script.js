var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var headerTitle = document.querySelector(".header-title");
var paragraphElement = document.querySelector(".paragraph");
var answerButtons = document.querySelector(".answers");
var wordBlank = document.querySelector(".word-blanks");
var rightAnswer = document.querySelector(".right-answer");
var wrongAnswer = document.querySelector(".wrong-answer");



var timerCount = 60;
var timer;
var questionCounter = 0;


function startgame() {
    answerButtons.classList.add('hide');
    headerTitle.classList.add('hide');
    startButton.classList.add('hide');
    paragraphElement.classList.add('hide');
    startTimer();
    setFirstQuestion();





}

function winGame () {
    wordBlank.textContent = "All done";
  setScore();

}

function loseGame () {
    wordBlank.textContent = "Game over";

}

function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer)
            winGame();
        }
        
    }, 1000);   
}

function setFirstQuestion () {
    var firstQuestion = document.querySelector("#question1");
    var Question1 = document.querySelector("#question2");
    firstQuestion.textContent = "Commonly used data types DO NOT";
    Question1.textContent = "include:";
    var button1 = document.querySelector("#button1")
    var button2 = document.querySelector("#button2")
    var button3 = document.querySelector("#button3")
    var button4 = document.querySelector("#button4")
    button1.textContent = "1. strings";
    button2.textContent = "2. booleans";
    button3.textContent = "3. alerts";
    button4.textContent = "4. numbers";
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    button1.dataset.correct = "false";
    button2.dataset.correct = "false";
    button3.dataset.correct = "true";
    button4.dataset.correct = "false";


}


function setSecondQuestion () {
    var secondQuestion = document.querySelector("#question2");
    secondQuestion.textContent = "The Condition in an if / else statement is enclosed within _______";
    var button1 = document.querySelector("#button1")
    var button2 = document.querySelector("#button2")
    var button3 = document.querySelector("#button3")
    var button4 = document.querySelector("#button4")
    button1.textContent = "quotes";
    button2.textContent = "curly brackets";
    button3.textContent = "parentheses";
    button4.textContent = "square brackets";
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    button1.dataset.correct = "false";
    button2.dataset.correct = "true";
    button3.dataset.correct = "false";
    button4.dataset.correct = "false";

}


// check answer
function checkAnswer (event) {
    var choice = event.target.dataset.correct
    console.log(choice);
    if (choice != "true") {
        timerCount = timerCount - 10;
        timerElement.textContent = timerCount;

        wordBlank.textContent = "Wrong!";



    }
    else if (choice === "true") {
        wordBlank.textContent = "Correct!";
    }
    // add choice to the correct answer div
    questionCounter++;
    if (questionCounter === 1) {
        setSecondQuestion();
    }
    else if (questionCounter === 2) {

    }
    else { 
        winGame();

    }


}



startButton.addEventListener("click", startgame)


/* 
Make startGame function, start timer when game starts. 
When game is started, go to the first question.



*/