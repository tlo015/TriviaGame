//variables to display when game starts, hold the questions and answers 
var timer = 5;
// var questions = [];
// var answers = [];
//variable to display when timer reaches 0
var correct = 0;
var incorrect = 0;
var unanswered = 0;


//diplay timer
function startTimer() {
    intervalId = setInterval (decrement,500);
}

//timer countdown function 
//if timer=0sec, show results
function decrement() {
   
    timer --;
    $("#time-left").html("<p>Time remaining: " + timer + " secs </p>");
    if (timer == 0) {
            stop(); 
            return
        }
       
    }

// function timer=0, show results, restart the game 
function stop() {
    clearInterval(intervalId);
    
}


//starts on the click of the button 
$(".start").on("click", function() {
    $(".start").hide(); 
    startTimer();
    showQuestion();
});


//quiz 
//var containing all the questions 
var quizQuestions = [
    {
        question: "What is 1+1?",
        answer: ["one", "two", "three"],
        correct: "two",            
    },
    {
        question: "What is 1x1?",
        answer: ["one", "two", "three"],
        correct: "one",
    },
    {
        question: "What is 1+2?",
        answer: ["one", "two", "three"],
        correct: "three",
    }
];

//function to display the question 11-slide 
var counter=0;

    function showQuestion() {
        // for (var i=0; i<quizQuestions.length; i++) {
        //     console.log (quizQuestions[i].question);
         $("#game-question").html("<p>" + quizQuestions[counter].question + "</p>")
        }
         console.log (quizQuestions[counter].question)

//function to display input type="radio"  choices onto the page, under each question
    function showChoices() {
        for (var j=0; j<quizQuestions.length; j++) {
            console.log (quizQuestions[j].answer);
            

        }
            
    }

//if time=0 or onclickfunvtion
//start newtimer 
//display right or wrong 
//stop newtimer
//counter++
//hide
 

showQuestion();

//counter = .length
//total results 
//restrt button 

        
    
// function that stores the results 
// results 

// when timer = 0secs or when done button is clicked 
// returns the correct, incorrect and unanswered counts to the page 



