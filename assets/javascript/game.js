//DON'T FORGET TO ADD COMMENTS

var word = "";
var wordBank = ["cat", "dog", "horse", "hey", "hi", "hello"];
word = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordLength = word.length;
var wordArray = word.split("");
var spaces = [];
var guessedLetters = [];
var numGuesses = 5;
var lose = false;
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

setUp();

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

// function winOrLose() {

// }
$("#play-button").on("click", function () {
    
    lose = false;
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

});
document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();
    var isWrong = true;
    var repeatLetter = false;
    

    if(!lose) {
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
            if (isWrong) {
                $("#incorrect").append(letter + " ");
                numGuesses--;
                $("#guesses").html(numGuesses);
                if (numGuesses <= 0) {
                    // $("#guesses").html(numGuesses);
                    // $("#correct").html("");
                    // $("#incorrect").html("");
                    alert("You lose.")
                    lose = true;
                }
            }
        }
    } else {
        alert("Please enter a valid letter.")
    }
}
};
