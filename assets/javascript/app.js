//---------- QUIZ ------------- 
//var containing all the questions 
var quizQuestions = [
    {
        question: "What is 1+1?",
        // answers: ["one", "two", "three", "four"],
        a: "one",
        b: "two", 
        c: "three",
        d: "four",
        correct: "two",            
    },
    {
        question: "What is 1x1?",
        answers: ["one", "two", "three", "four"],
        a: "one",
        b: "two", 
        c: "three",
        d: "four",
        correct: "one",
    },
    {
        question: "What is 1+2?",
        // answers: ["one", "two", "three", "four"],
        a: "one",
        b: "two", 
        c: "three",
        d: "four",
        correct: "three",
    }
];

//VARIABLES
//variables to display when game starts, hold the questions and answers 
var seconds = 10;

//variable for correct/incorrect answer page 
var timer = 5;

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
    ShowChoices();
});

//start timer
function startTimer() {
    intervalId = setInterval (decrement,500);
}

//timer countdown function 
//if timer=0sec, show results
function decrement() {
    seconds --;
    $("#time-left").html("<p>Time remaining: " + seconds + " secs </p>");
    if (seconds < 0) {
            stop();
            $("#time-left").hide();
            $("#game-question").hide();
            $("#game-answers").hide();

        }
}

// function seconds=0, show results, ready for next question 
function stop() {
    clearInterval(intervalId);  
}





// CREATE BUTTONS
    // var newbutton = $("<button>");
    // $("button").attr("id", 'a');
    // $("#game-answers").append(newbutton);

//--------- QUESTION AND ANSWER SLIDE ----------
//function to display the question 11-slide
//display choices onto the page, under each question 
var counter=0;
function showQuestion() {
    $("#game-question").html("<p>" + quizQuestions[counter].question + "</p>")
    console.log (quizQuestions[counter].question)
}

function ShowChoices() {
    // var choices= quizQuestions[counter].answers;
    //     console.log (choices);
    // for (var i=0; i<choices.length; i++);
        // var btn = $("<button>");
        // btn.text(i);
        $("#game-answers").append("<button>" + quizQuestions[counter].a + "</button>");
        $("#game-answers").append("<button>" + quizQuestions[counter].b + "</button>");
        $("#game-answers").append("<button>" + quizQuestions[counter].c + "</button>");
        $("#game-answers").append("<button>" + quizQuestions[counter].d + "</button>");
    // $("#a").html(quizQuestions[counter].a)
    // $("#b").html(quizQuestions[counter].b)
    // $("#c").html(quizQuestions[counter].c)
    // $("#d").html(quizQuestions[counter].d)
}
   
function showAnswer() {
    $("#game-answers").on("click", function(){
        var correctAns = quizquestion[counter].correct;
        if (userAnswer == correctAns) {
            correct++;
            $("#userSelect").text("Correct!");    
        } else if (userAnswer !== correctAns) {
            incorrect++;
            $("#userSelect").text("Incorrect!");
        } else (timer < 0);
            unanswered++;
            $("#userSelect").text("Time's Up!");
    })
}





})


//if time=0 or onclickfunvtion
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



