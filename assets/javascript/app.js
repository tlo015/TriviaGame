//---------- QUIZ ------------- 
//var containing all the questions 
var quizQuestions = [
    {
        question: "How did Viserys Targaryen die?",
        answers: ["Stabbed in the heart", "With a melted golden crown", "Beheading", "Burned alive"],
        correct: 1,  
        string: "With a melted golden crown",         
    },
    {
        question: "Who created the White Walkers?",
        answers: ["The First Men", "The Three-Eyed Raven", "The Wildlings", "The Children Of The Forest"],
        correct: 3, 
        string: "The Children Of The Forest",
    },
    {
        question: "What is the only thing that can put out volatile Wildfire?",
        answers: ["Sand", "Water", "Dragon's blood", "Sunlight"],
        correct: 0, 
        string: "Sand",
    },
    {
        question: "The Night King was created using a dagger made of:",
        answers: ["Blue Ice", "Obsidian", "Valyrian Steel", "Dragonglass"],
        correct: 3, 
        string: "Dragonglass",
    },
    {
        question: "How many times has Beric Dondarrion been brought back to life?",
        answers: ["Three times", "Five Times", "Six TImes", "Seven TImes"],
        correct: 2, 
        string: "Six Times",
    },
    {
        question: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
        answers: ["Ghost", "Lady", "Nymeria", "Summer"],
        correct: 1, 
        string: "Lady",
    },
    {
        question: "What was the name of Ned Stark's greatsword?",
        answers: ["Ice", "Northguard", "Oathkeeper", "Widow's Wail"],
        correct: 0, 
        string: "Ice",
    },
    {
        question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
        answers: ["Pride in drawing first blood", " Knowledge in poisons", "Nighttime attacks", "Ruby-colored armor"],
        correct: 1, 
        string: "Knowledge of poisons",
    },
    {
        question: "How many arrows does Ramsay Bolton let loose at Rickon Stark?",
        answers: ["Three", "Five", "Two", "Four"],
        correct: 3, 
        string: "Four",
    },
    {
        question: "In which territory is Mance Rayder recognized as king?",
        answers: ["King's Landing", "Westeros", "House Tyrell", "Beyond the Wall"],
        correct: 3, 
        string: "Beyond the Wall",
    },
        
];


//----------VARIABLES----------
//variable to display when timer reaches 0
var correct;
var incorrect;
var unanswered;
var answered;
var counter=0;

//----------TIMER ----------
//starts on the click of the button
var seconds;

function startTimer() {
    seconds = 15;
    $("#time-left").html("<p>Time remaining: " + seconds + " secs </p>")
    intervalId = setInterval (decrement,500);
}

//timer countdown function 
//if timer=0sec, show results
function decrement() {
    seconds --;
    $("#time-left").html("<p> Time remaining: " + seconds + " secs </p>")
    if (seconds < 0) {
        clearInterval(intervalId);
        answered = false;
        showAnswer();
    }
}

//---------START NEW GAME------------

$(".start").on("click", function() {
    $(".start").hide(); 
    newGame();
});

function newGame() {
    $(".ansCorrect").empty();
    $(".ansIncorrect").empty();
    $(".ansNone").empty();
    counter = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    showQuestion();
}

//--------- QUESTION AND ANSWER SLIDE ----------
//function to display the question 
//display choices onto the page, under each question 

var userChoice;

function showQuestion() {
    startTimer();
    $("#time-left").show();
    $(".message").empty();
    $(".correctedAns").empty()
    // $("#game-question").show();
    // $("#game-answers").show();
    answered = true;

    $("#game-question").html("<h4>" + quizQuestions[counter].question + "</h4>")
    console.log (quizQuestions[counter].question)

    for (var i=0; i<4; i++){
        var choices = $("<button>");
        choices.text(quizQuestions[counter].answers[i]);
        //set an attribute referencing index position within the array
        choices.attr("data-index",i);
        console.log(choices);
        choices.addClass("select")
        $("#game-answers").append(choices);
    }

//clicking on button to stop timer 
//show answer page
    $(".select").on("click", function(){
        userChoice = $(this).attr("data-index");
        console.log ("UserChoice", userChoice);
        clearInterval(intervalId);
        showAnswer();
    });
}


//---------WHETHER CLICK WAS CORRECT OR INCORRECT ----------
// when timer = 0secs or when done button is clicked 
// returns the correct, incorrect and unanswered counts to the page 

function showAnswer() {
    $("#time-left").hide();
    
    $("#game-answers").empty(); //empties out the aprevios array of answers

    var rightAns = quizQuestions[counter].correct;
    var rightStr = quizQuestions[counter].string;
    console.log ("right answer:", rightAns);

    if ((userChoice == rightAns) && (answered == true)) {
        correct++;
        $(".message").html("<h6> That's Correct! </h6>");
    } else if ((userChoice != rightAns) && (answered == true)) {
        incorrect++;
        $(".message").html("<h6> That's Incorrect! </h6> <br>");
        $(".correctedAns").html("<p> The correct answer was: <br>" + rightStr + "</p>");
    } else {
        unanswered++;
        $(".message").html("<h6> Out of Time! </h6> <br>")
        $(".correctedAns").html("<p> The correct answer was: <br>" + rightStr + "</p>");
        answered = true;
    }

    //start newtimer (11-slidehow)
    //counter++ for next question 
    if (counter == (quizQuestions.length)-1) {
        setTimeout (showResults, 2000);
    }
    else {
        counter++;
        console.log ("counter++: ", counter)
        setTimeout(showQuestion, 2000);
    }
}

// function that stores the results 
// results 
function showResults() {
    $("#game-question").hide();

    $(".message").html ("<h4> Let's see how you did: </h4>")
    $(".correctedAns").hide();

    $(".ansCorrect").html("<p> Correct Answers: " + correct + "</p>");
    $(".ansIncorrect").html("<p> Incorrect Answers: " + incorrect + "</p>");
    $(".ansNone").html("<p> Unanswered Quesions: " + unanswered + "</p>");
}


