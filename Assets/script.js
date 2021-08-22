// Global variables
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var headerTitle = document.querySelector(".header-title");
var paragraphElement = document.querySelector(".paragraph");
var answerButtons = document.querySelector(".answers");
var wordBlank = document.querySelector(".word-blanks");
var endScreen = document.querySelector(".endscreen");
var finalScore = document.querySelector("#finalscore");
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
var submitBtn = document.querySelector(".submit");
var enterInitials = document.querySelector(".initials");
var enterHighScore = document.querySelector(".highscores");
var displayScore = document.querySelector(".userscore");
var userInitials = document.querySelector("#text");
var scoreList = document.querySelector("#highscorelist");
var scoreForm = document.querySelector("#score-form");
var scoreCount = document.querySelector("#score-count");



var timerCount = 75;
var timer;
var Counter = 0;
var timeLeft; 
var scores = [];

window.onload = function() {
    document.getElementById('button').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('button1').style.display = 'none';
    document.getElementById('button2').style.display = 'none';
    document.getElementById('button3').style.display = 'none';
    document.getElementById('button4').style.display = 'none';

  };



function startQuiz() {
    headerTitle.classList.add('hide');
    startButton.classList.add('hide');
    paragraphElement.classList.add('hide');
    document.getElementById('button1').style.display = 'block';
    document.getElementById('button2').style.display = 'block';
    document.getElementById('button3').style.display = 'block';
    document.getElementById('button4').style.display = 'block';
    // Call the timer function when the quiz is started
    startTimer();
    // Call the first question function when the quiz starts
    setFirstQuestion();
}




function setScore() {
    var setScore = timerCount;
    finalScore.textContent = "Your final score is " + setScore + ".";
    enterInitials.textContent = "Enter Initials:";
    document.getElementById('button').style.display = 'inline';
    document.getElementById('text').style.display = 'inline';


}

function passQuiz() {
    fifthQuestion.classList.add('hide');
    question5.classList.add('hide');
    question5b.classList.add('hide');
    button1.style.visibility = 'hidden';
    button2.style.visibility = 'hidden';
    button3.style.visibility = 'hidden';
    button4.style.visibility = 'hidden';
    endScreen.textContent = "All done!";
    clearInterval(timer);
    setScore();
}


function loseGame() {
    wordBlank.textContent = "Game over";

}
// Add a timer function
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer)
        }
        
    }, 1000);   
}

function setFirstQuestion() {
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
function setSecondQuestion() {
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
    button1.textContent = "1. numbers and strings";
    button2.textContent = "2. other arrays";
    button3.textContent = "3. booleans";
    button4.textContent = "4. all of the above";
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
    button1.textContent = "1. commas";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. quotes";
    button4.textContent = "4. parentheses";
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
    button1.textContent = "1. Javascript";
    button2.textContent = "2. Terminal/ Bash";
    button3.textContent = "3. for loops";
    button4.textContent = "4. console.log";
    document.querySelector("#button1").addEventListener("click", checkAnswer);
    document.querySelector("#button2").addEventListener("click", checkAnswer);
    document.querySelector("#button3").addEventListener("click", checkAnswer);
    document.querySelector("#button4").addEventListener("click", checkAnswer);
    button1.dataset.correct = "false";
    button2.dataset.correct = "false";
    button3.dataset.correct = "false";
    button4.dataset.correct = "true";

}


function submit() {
    wordBlank.classList.add('hide');
    endScreen.classList.add('hide');
    finalScore.classList.add('hide');
    enterInitials.classList.add('hide');
    document.getElementById('text').style.display = 'none';
    document.getElementById('button').style.display = 'none';
    enterHighScore.textContent = "Highscores"; 
    renderScoreList();
    storedScores();
    
    
}

 function renderScoreList() {

     scoreList.innerHTML = "";
     scoreCount.textContent = scores.length;


     for (var i = 0; i < scores; i++) {
         var score = scores[i];

         var li = document.createElement("li");
         li.textContent = score;
         li.setAttribute("data-index", i);

         scoreList.appendChild(li);


     }
 }

 function init() {
     var storedScore = JSON.parse(localStorage.getItem("scores"));
     if (storedScore !== null) {
         scores = storedScore;
     }



 }

 function storedScores() {
     localStorage.setItem("scores", JSON.stringify(scores));


     scoreForm.addEventListener("submit", function(event) {
        event.preventDefault();
   
        var scoreText = userInitials.value.trim();
   
        if (scoreText === "") {
            return;
        }
   
   
   scores.push(scoreText);
  // userInitials.value = "";
   
   
   
    });




}



// Add function to check answer when an option is clicked
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
    Counter++;
    if (Counter === 1) {
        firstQuestion.classList.add('hide');
        question1.classList.add('hide');
        setSecondQuestion();
    }
    else if (Counter === 2) {
        // Hide last question, call the next question
        secondQuestion.classList.add('hide');
        question2.classList.add('hide');
        setThirdQuestion();

    }

    else if (Counter === 3) {
        // Hide last question, call the next question
        thirdQuestion.classList.add('hide');
        question3.classList.add('hide');
        setFourthQuestion();
    }

    else if (Counter === 4) {
        // Hide last question, call the next question
        fourthQuestion.classList.add('hide');
        question4.classList.add('hide');
        setFifthQuestion();
    }

    else if (Counter === 5) {
        passQuiz();
    }
    
   
    else if (Counter === 6) {
        submit();

    }
    else {
        init()
    }

    //  else if (Counter === 7) {
    //      renderScoreList();



    //  }



}
    


    
    
console.log(scores);


submitBtn.addEventListener("click", submit)

startButton.addEventListener("click", startQuiz)


/* 
Make startGame function, start timer when game starts. 
When game is started, go to the first question.



*/