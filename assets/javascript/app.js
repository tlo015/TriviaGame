//---------- QUIZ ------------- 
//var containing all the questions 
var quizQuestions = [
    {
        question: "What is 1+1?",
        answers: ["one", "two", "three", "four"],
        // a: "one",
        // b: "two", 
        // c: "three",
        // d: "four",
        correct: "two",            
    },
    {
        question: "What is 1x1?",
        answers: ["one", "two", "three", "four"],
        // a: "one",
        // b: "two", 
        // c: "three",
        // d: "four",
        correct: "one",
    },
    {
        question: "What is 1+2?",
        answers: ["one", "two", "three", "four"],
        // a: "one",
        // b: "two", 
        // c: "three",
        // d: "four",
        correct: "three",
    }
];

//VARIABLES
//variables to display when game starts, hold the questions and answers 
var seconds = 5;

//variable to display when timer reaches 0
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//---------- START GAME --------
$(document).ready(function() {


//----------TIMER ----------
//starts on the click of the button
$(".start").on("click", function() {
    $(".start").hide(); 
    startTimer();
    showQuestion();
});

//start timer
function startTimer() {
    intervalId = setInterval (decrement,500);
}

//timer countdown function 
//if timer=0sec, show results
function decrement() {
    seconds --;
    $("#time-left").html("<p>Time remaining: " + seconds + " secs </p>")
}

// function seconds=0, show results, ready for next question 
function stop() {
    clearInterval(intervalId);  
}

//--------- QUESTION AND ANSWER SLIDE ----------
//function to display the question (11-slidehow)
//display choices onto the page, under each question 
var counter=0;
function showQuestion() {
    $("#game-question").html("<p>" + quizQuestions[counter].question + "</p>")
    console.log (quizQuestions[counter].question)
}

    for (var i=0; i<4; i++){
        var choices = $("<button>");
        choices.text(quizQuestions[counter].answers[i]);
        choices.attr("index", i);
        choices.addClass("select")
        $("#game-answers").append(choices);
    }

//clicking on button to stop timer 
//show answer page
    $("#game-answers").on("click", function(){
        userChoice = $('.select').data("index")
        clearInterval(intervalId);
        stop();
            $("#time-left").hide();
            $("#game-question").hide();
            $("#game-answers").hide();
        showAnswer();
    })

//---------WHETHER CLICK WAS CORRECT OR INCORRECT ----------
//if time=0 or onclickfunvtion
function showAnswer() {
    var rightAns = quizQuestions[counter].correct;
    if (userChoice == rightAns) {
        correct++;
        $(".message").html("That's Correct!");
    } else if (userChoice !== rightAns) {
        incorrect++;
        $(".message").html("That's Incorrect!");
        $(".correctedAns").html("The correct answer was: " + rightAns);
    } else if (seconds < 0) {
        unanswered++;
        $(".message").html("Out of time!")
        $(".correctedAns").html("The correct answer was: " + rightAns);
    }
}







})



//start newtimer 

//stop newtimer
//counter++
//hide
 

// showQuestion();

//counter = .length
//total results 
//restrt button 

        
    
// function that stores the results 
// results 

// when timer = 0secs or when done button is clicked 
// returns the correct, incorrect and unanswered counts to the page 



