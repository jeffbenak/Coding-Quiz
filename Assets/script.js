var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var headerTitle = document.querySelector(".header-title");
var paragraphElement = document.querySelector(".paragraph");
var answerButtons = document.querySelector(".answers");
var wordBlank = document.querySelector(".word-blanks");
var rightAnswer = document.querySelector(".right-answer");
var wrongAnswer = document.querySelector(".wrong-answer");
var firstQuestion = document.querySelector("#question1");
var question1 = document.querySelector("#question2");
var secondQuestion = document.querySelector("#question3");
var question2 = document.querySelector("#question4");
var thirdQuestion = document.querySelector("#question5");
var question3 = document.querySelector('#question6');
var fourthQuestion = document.querySelector("#question7");
var question4 = document.querySelector('#question8');
var fifthQuestion = document.querySelector("#question9");
var question5 = document.querySelector('#question10');
var question5b = document.querySelector('#question11');



var timerCount = 75;
var timer;
var questionCounter = 0;


function startGame() {
    answerButtons.classList.add('hide');
    headerTitle.classList.add('hide');
    startButton.classList.add('hide');
    paragraphElement.classList.add('hide');
    // Start timer when start game button is clicked
    startTimer();
    // Immediately display the first question of the quiz when it is started
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
            // winGame();
        }
        
    }, 1000);   
}

function setFirstQuestion () {
    // Display the first question of the quiz
    firstQuestion.textContent = "Commonly used data types DO NOT";
    question1.textContent = "include:";
    // Assign each button to their own ID
    var button1 = document.querySelector("#button1")
    var button2 = document.querySelector("#button2")
    var button3 = document.querySelector("#button3")
    var button4 = document.querySelector("#button4")
    // Display the answer choices
    button1.textContent = "1. strings";
    button2.textContent = "2. booleans";
    button3.textContent = "3. alerts";
    button4.textContent = "4. numbers";
    // Check each answer with the checkAnswer function whenever an option is clicked
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    // Assign the right answer to true and the rest to false
    button1.dataset.correct = "false";
    button2.dataset.correct = "false";
    button3.dataset.correct = "true";
    button4.dataset.correct = "false";


}

// Added two IDs for text aligning purposes
function setSecondQuestion () {
    secondQuestion.textContent = "The Condition in an if / else statement is";
    question2.textContent = "enclosed within _______.";
    var button1 = document.querySelector("#button1")
    var button2 = document.querySelector("#button2")
    var button3 = document.querySelector("#button3")
    var button4 = document.querySelector("#button4")
    button1.textContent = "1. quotes";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. parentheses";
    button4.textContent = "4. square brackets";
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    button1.dataset.correct = "false";
    button2.dataset.correct = "true";
    button3.dataset.correct = "false";
    button4.dataset.correct = "false";

}

function setThirdQuestion () {
    thirdQuestion.textContent = "Arrays in javascript can be used to store";
    question3.textContent = "_____.";
    var button1 = document.querySelector("#button1")
    var button2 = document.querySelector("#button2")
    var button3 = document.querySelector("#button3")
    var button4 = document.querySelector("#button4")
    button1.textContent = "numbers and strings";
    button2.textContent = "other arrays";
    button3.textContent = "booleans";
    button4.textContent = "all of the above";
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    button1.dataset.correct = "false";
    button2.dataset.correct = "false";
    button3.dataset.correct = "false";
    button4.dataset.correct = "true";

}


function setFourthQuestion () {
    fourthQuestion.textContent = "String values must be enclosed within _____";
    question4.textContent = "when being assigned to variables.";
    var button1 = document.querySelector("#button1")
    var button2 = document.querySelector("#button2")
    var button3 = document.querySelector("#button3")
    var button4 = document.querySelector("#button4")
    button1.textContent = "commas";
    button2.textContent = "curly brackets";
    button3.textContent = "quotes";
    button4.textContent = "parentheses";
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    button1.dataset.correct = "false";
    button2.dataset.correct = "false";
    button3.dataset.correct = "true";
    button4.dataset.correct = "false";

}

function setFifthQuestion () {
    fifthQuestion.textContent = "A very useful tool used during development";
    question5.textContent = "and debugging for printing content to the";
    question5b.textContent = "debugger is:";
    var button1 = document.querySelector("#button1")
    var button2 = document.querySelector("#button2")
    var button3 = document.querySelector("#button3")
    var button4 = document.querySelector("#button4")
    button1.textContent = "Javascript";
    button2.textContent = "Terminal/ Bash";
    button3.textContent = "for loops";
    button4.textContent = "console.log";
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    button1.dataset.correct = "false";
    button2.dataset.correct = "false";
    button3.dataset.correct = "false";
    button4.dataset.correct = "true";

}

// Add function to check answer when an option is clicked
function checkAnswer (event) {
    var choice = event.target.dataset.correct
    console.log(choice);
    if (choice != "true") {
        timerCount = timerCount - 10;
        timerElement.textContent = timerCount;
      //  var elem = document.createElement("hr");
      //  elem.setAttribute("width", "100px");
       // document.body.appendChild(elem);
        wordBlank.textContent = "Wrong!";



    }
    else if (choice === "true") {
        wordBlank.textContent = "Correct!";
    }
    // add choice to the correct answer div
    questionCounter++;
    if (questionCounter === 1) {
        firstQuestion.classList.add('hide');
        question1.classList.add('hide');
        setSecondQuestion();
    }
    else if (questionCounter === 2) {
        secondQuestion.classList.add('hide');
        question2.classList.add('hide');
        setThirdQuestion();

    }

    else if (questionCounter === 3) {
        thirdQuestion.classList.add('hide');
        question3.classList.add('hide');
        setFourthQuestion();
    }

    else if (questionCounter === 4) {
        fourthQuestion.classList.add('hide');
        question4.classList.add('hide');
        setFifthQuestion();
    }


    else { 
       // winGame();

    }


}


startButton.addEventListener("click", startGame)


/* 
Make startGame function, start timer when game starts. 
When game is started, go to the first question.



*/