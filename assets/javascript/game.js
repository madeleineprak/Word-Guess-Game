//DON'T FORGET TO ADD COMMENTS

var word = "";
var wordBank = ["eggplant", "honeydew", "milkshake", "pancake", "jellybean"];
var photoBank = ["assets/images/egg.jpeg", "assets/images/plant.jpeg", "assets/images/honey.jpg", "assets/images/dew.jpg", "assets/images/milk.jpg", "assets/images/shake.jpg", "assets/images/pan.jpg", "assets/images/cake.jpg", "assets/images/jelly.jpg", "assets/images/bean.jpg"]
word = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordLength = word.length;
var wordArray = word.split("");
var spaces = [];
var guessedLetters = [];
var numGuesses = 5;
var lose = false;
var win = false;
var gameStarted = false;
$("#guesses").html(numGuesses);

//add this to a function
// function winOrLose() {
//     if (numGuesses = 0) {
//         alert("You lose.")
//     }
//     if (numGuesses > 0 && ) {

//     }
// }

function createWord() {

    for (i = 0; i < wordLength; i++) {
        spaces.push("_");
    }
}

function printWord() {
    for (j = 0; j < wordLength; j++) {
        $("#correct").append(spaces[j] + " ");
    }
}

function setUp() {

    createWord();
    printWord();
}

console.log(word);

// setUp();

//Needed functions

// function playGame () {

// }

// function setUp() {

// }
// function checkRepeat() {

// }

// function checkIfLetter() {

// }

// function addCorrectLetter() {

// }

// function addIncorrectLetter() {

// }

// function checkWin() {

// }

//function checkLose() {

//}

$("#play-button").on("click", function () {
    gameStarted = true;
    lose = false;
    win = false;
    spaces = [];
    guessedLetters = [];
    numGuesses = 5;

    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(word);
    wordLength = word.length;
    wordArray = word.split("");
    $("#correct").html("");
    $("#incorrect").html("");
    $("#guesses").html(numGuesses);
    setUp();
    // for(i=0; i) {

    // }
    if (word === wordBank[0]) {
        $("#photo-one").attr("src", photoBank[0]);
        $("#photo-two").attr("src", photoBank[1]);
    } else if (word === wordBank[1]) {
        $("#photo-one").attr("src", photoBank[2]);
        $("#photo-two").attr("src", photoBank[3]);
    } else if (word === wordBank[2]) {
        $("#photo-one").attr("src", photoBank[4]);
        $("#photo-two").attr("src", photoBank[5]);
    } else if (word === wordBank[3]) {
        $("#photo-one").attr("src", photoBank[6]);
        $("#photo-two").attr("src", photoBank[7]);
    } else if (word === wordBank[4]) {
        $("#photo-one").attr("src", photoBank[8]);
        $("#photo-two").attr("src", photoBank[9]);
    }


});
document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();
    var isWrong = true;
    var repeatLetter = false;


    if (!lose && !win && gameStarted) { //not win too?
        if (letter.length === 1 && letter.match(/[a-z]/i)) {
            for (i = 0; i < guessedLetters.length; i++) {
                if (letter === guessedLetters[i]) {
                    repeatLetter = true;
                }
            }
            if (repeatLetter) {
                alert("You already guessed that letter! Guess a different letter.")
            } else {
                guessedLetters.push("" + letter);
                for (i = 0; i < wordLength; i++) {
                    if (letter === wordArray[i]) {
                        isWrong = false;
                        spaces[i] = letter;
                        $("#correct").html("");
                        printWord();
                    }
                }
                if (spaces.join("") === word) {
                    win = true;
                } 
                if (win) {
                    alert("You win!");
                }
                if (isWrong) {
                    $("#incorrect").append(letter + " ");
                    numGuesses--;
                    $("#guesses").html(numGuesses);
                    if (numGuesses <= 0) {
                        // $("#guesses").html(numGuesses);
                        // $("#correct").html("");
                        // $("#incorrect").html("");
                        alert("You lose. The word was " + word + ".");
                        lose = true;
                    }
                }
            }
        } else {
            alert("Please enter a valid letter.")
        }
    }
};
