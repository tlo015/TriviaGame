
//variables to display when game starts, hold the questions and answers 
var timer = 5;

//variable for correct/incorrect answer page 
var answerTimer = 5;

//variable to display when timer reaches 0
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//---------- START GAME --------
$(document).ready(function() {


//----------TIMER ----------
//start timer
function startTimer() {
    intervalId = setInterval (decrement,1000);
}

//timer countdown function 
//if timer=0sec, show results
function decrement() {
    timer --;
    $("#time-left").html("<p>Time remaining: " + timer + " secs </p>");
    if (timer == 0) {
            stop();
            $("#time-left").hide();
            $("#game-question").hide();
            $("#game-answers").hide();
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


// // CREATE BUTTONS
function buttons() {
    var newbutton = $("<input type, button>");
    $("input type, button").class(button)
    $("#game-answers").append(newbutton);
}

//--------- QUESTION AND ANSWER SLIDE ----------
//function to display the question 11-slide
//display choices onto the page, under each question 
var counter=0;
function showQuestion () {
    $("#game-question").html("<p>" + quizQuestions[counter].question + "</p>")
    console.log (quizQuestions[counter].question)

    var newButton = $("<button>");
    $("#a").html(quizQuestions[counter].a)
    $("#b").html(quizQuestions[counter].b)
    $("#c").html(quizQuestions[counter].c)
    $("#d").html(quizQuestions[counter].d)
}


        
//             buttons ("a", quizQuestion.a);
        // var choices = quizQuestions[counter].answers;
        //     console.log (choices);
        //         for (var i=0; i<choices.length; i++) {
        //         $("#game-answers").html("<li>" + choices[i] + "</li>"); 
        //         }


    
//         var choices = quizQuestions[counter].answers;
//         var choicesButton = [];
//             for (var i=0; i<choices.length; i++) {
//                 var list = $("<li>");
//                 $("li").html(choices[i]);
//                 $("#game-answers").append(list);
//     }
// }
    // function showChoices() {
    //     
    // } 

    // function showChoices() {
    //     var choices = $("#game-answers");
    //     for (var i=0; i<quizQuestions[counter].answer.length; i++) {
    //          var newChoices = ("<p>" + choices + "</p>");
    //          choices.append(newChoices);
    //     }
    // }

    // function showChoices() {
    //     $("#a").html("<button>" + quizQuestions[counter].answer[0] + "</button>")
    // }



})



           
        
         
    // var choices = $("#game-answers");
    //     for (var i=0; i<quizQuestions[counter].answer.length; i++) {
    //          var newChoices = ("<p>" + choices + "</p>");
    //          choices.append(newChoices);
        
    
//display right or wrong 
// function answerPage() {
//     countDown();
//     if (user ==)
// }
         
// var countDown = function() {
//     count--;
// }


            // var answers = $("<div>");
 
                   // $("#game-answers").text(
            




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



