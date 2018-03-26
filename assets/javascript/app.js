//---------- QUIZ ------------- 
//var containing all the questions 
var quizQuestions = [
    {
        question: "How did Viserys Targaryen die?",
        answers: ["Stabbed in the heart", "With a melted golden crown", "Beheading", "Burned alive"],
        correct: "With a melted golden crown",            
    },
    {
        question: "Who created the White Walkers?",
        answers: ["The First Men", "The Three-Eyed Raven", "The Wildlings", "The Children Of The Forest"],
        correct: "The Children Of The Forest",
    },
    {
        question: "What is the only thing that can put out volatile Wildfire?",
        answers: ["Sand", "Water", "Dragon's blood", "Sunlight"],
        correct: "Sand",
    },
    {
        question: "The Night King was created using a dagger made of:",
        answers: ["Blue Ice", "Obsidian", "Valyrian Steel", "Dragonglass"],
        correct: "Dragonglass",
    },
    {
        question: "How many times has Beric Dondarrion been brought back to life?",
        answers: ["Three times", "Five Times", "Six TImes", "Seven TImes"],
        correct: "Six Times",
    },
    {
        question: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
        answers: ["Ghost", "Lady", "Nymeria", "Summer"],
        correct: "Lady",
    },
    {
        question: "What was the name of Ned Stark's greatsword?",
        answers: ["Ice", "Northguard", "Oathkeeper", "Widow's Wail"],
        correct: "Ice",
    },
    {
        question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
        answers: ["Pride in drawing first blood", " Knowledge in poisons", "Nighttime attacks", "Ruby-colored armor"],
        correct: "Knowledge of poisons",
    },
    {
        question: "How many arrows does Ramsay Bolton let loose at Rickon Stark?",
        answers: ["Three", "Five", "Two", "Four"],
        correct: "Four",
    },
    {
        question: "In which territory is Mance Rayder recognized as king?",
        answers: ["King's Landing", "Westeros", "House Tyrell", "Beyond the Wall"],
        correct: "Beyond the Wall",
    },
        
];

//----------VARIABLES----------
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
    //variables to display when game starts, hold the questions and answers 
    seconds = 5;
    intervalId = setInterval (decrement,500);
}

//timer countdown function 
//if timer=0sec, show results
function decrement() {
    seconds --;
    $("#time-left").html("<p>Time remaining: " + seconds + " secs </p>")
    if (seconds < 0) {
        stop()
        showAnswer();
    }
}

// function seconds=0, show results, ready for next question 
function stop() {
    clearInterval(intervalId);  
    $("#time-left").hide();
    $("#game-question").hide();
    $("#game-answers").hide();
}

//--------- QUESTION AND ANSWER SLIDE ----------
//function to display the question 
//display choices onto the page, under each question 
var counter=0;
function showQuestion() {
    $("#game-question").html("<p>" + quizQuestions[counter].question + "</p>")
    console.log (quizQuestions[counter].question)

    for (var i=0; i<4; i++){
        var choices = $("<button>");
        choices.text(quizQuestions[counter].answers[i]);
        //set an attribute referencing index position within the array
        choices.attr({"data-index":i});
        choices.addClass("select")
        $("#game-answers").append(choices);
    }

//clicking on button to stop timer 
//show answer page
    $("#game-answers").on("click", function(){
        userChoice = $(this).data("index")
        console.log (userChoice);
        clearInterval(intervalId);
        stop();
        showAnswer();
    })
}


//---------WHETHER CLICK WAS CORRECT OR INCORRECT ----------
// when timer = 0secs or when done button is clicked 
// returns the correct, incorrect and unanswered counts to the page 
function showAnswer() {
    $("#time-left").hide();
    $("#game-question").hide();
    $("#game-answers").hide();
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

//start newtimer (11-slidehow)
//stop newtimer
//counter++
//hide and display next question
function nextQuestion() {
    counter++;
    setTimeout(showQuestion, 5000);
    if (counter === quizQuestions.length){
        showResults();
    }
}

// function that stores the results 
// results 
function showResults() {
    $("#time-left").hide();
    $("#game-question").hide();
    $("#game-answers").hide();

    $(".ansCorrect").html("<p> Correct Answers: " + correct + "</p>");
    $(".ansIncorrect").html("<p> Incorrect Answers: " + incorrect + "</p>");
    $(".ansNone").html("<p> Unanswered Quesions: " + unanswered + "</p>");
}

$(".restart").on("click", function() {
    $(".restart").hide();
    showResults().hide();
    startTimer();
    showQuestion();
})

})
