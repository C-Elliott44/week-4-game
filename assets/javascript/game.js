// window opens and the game is ready to go

//random number gets generated

//random values get added to the gems

var randomNumber;
var wins = 0;
var losses = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var userScore = 0;


//this will generate a random number between 19-120
function randomNumberGenerator(){
    randomNumber = Math.floor( 19 + Math.random() * 101);
    console.log(randomNumber);
};

//this will generate a random number for the crystals between 1-12
function randomNumberCrystalOne(){
    crystalOne = Math.floor( 1 + Math.random() * 11);
    console.log(crystalOne);
};

function randomNumberCrystalTwo(){
    crystalTwo = Math.floor( 1 + Math.random() * 11);
    console.log(crystalTwo);
};

function randomNumberCrystalThree(){
    crystalThree = Math.floor( 1 + Math.random() * 11);
    console.log(crystalThree);
};

function randomNumberCrystalFour(){
    crystalFour = Math.floor( 1 + Math.random() * 11);
    console.log(crystalFour);
};

//This will but what ever var randomNumer = into the winow
function putRandomNumberInWindow(){
    $(".randomNumber").text(randomNumber);
};

//These function will put what even wins and losses equals into the score box
function putWinsInWindow(){
    $(".wins").text(wins);
};

function putLossesInWindow(){
    $(".losses").text(losses);
};

//This will put the users score into the window

function putUserScoreInWindow(){
    $(".userScore").text(userScore);
};

function lossEvent(){
    losses++;
    putLossesInWindow();
    randomNumberGenerator();
    putRandomNumberInWindow();
    randomNumberCrystalOne();
    randomNumberCrystalTwo();
    randomNumberCrystalThree();
    randomNumberCrystalFour();
    userScore = 0;
    //putUserScoreInWindow();
    $(".description").text("You Lose!")
};

function winEvent(){
    wins++;
    putWinsInWindow();
    randomNumberGenerator();
    putRandomNumberInWindow();
    randomNumberCrystalOne();
    randomNumberCrystalTwo();
    randomNumberCrystalThree();
    randomNumberCrystalFour();
    userScore = 0;
    //putUserScoreInWindow();
    $(".description").text("You Win!")
};

//This will add the value of the crystals to the user score
$(".crystalOne").click(function crystalOneClick() {
    userScore = userScore + crystalOne;
    putUserScoreInWindow();
    $(".description").text("")
    if ( randomNumber === userScore) {
        setTimeout( function(){
            winEvent();        
        }, 0 );
    }
    else if ( randomNumber < userScore) {
        setTimeout( function(){
            lossEvent();
        })
    }
});

$(".crystalTwo").click(function crystalTwoClick() {
    userScore = userScore + crystalTwo;
    putUserScoreInWindow();
    $(".description").text("")
    if ( randomNumber === userScore) {
        setTimeout( function(){
            winEvent();        
        }, 0 );
    }

    else if ( randomNumber < userScore) {
        setTimeout( function(){
            lossEvent();
        })
    }
});

$(".crystalThree").click(function crystalThreeClick() {
    userScore = userScore + crystalThree;
    putUserScoreInWindow();
    $(".description").text("")
    if ( randomNumber === userScore) {
        setTimeout( function(){
            winEvent();        
        }, 0 );
    }
    else if ( randomNumber < userScore) {
        setTimeout( function(){
            lossEvent();
        })
    }
});

$(".crystalFour").click(function crystalFourClick() {
    userScore = userScore + crystalFour;
    putUserScoreInWindow();
    $(".description").text("")
    if ( randomNumber === userScore) {
        setTimeout( function(){
            winEvent();        
        }, 0 );
    }
    else if ( randomNumber < userScore) {
        setTimeout( function(){
            lossEvent();
        })
    }
});







//place just too call functions

randomNumberGenerator();

randomNumberCrystalOne();

randomNumberCrystalTwo();

randomNumberCrystalThree();

randomNumberCrystalFour();

putRandomNumberInWindow();

putUserScoreInWindow();

putLossesInWindow();

putWinsInWindow();
