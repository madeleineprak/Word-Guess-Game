// var myGame = {
//     "wordArray": ["cat", "dog"],
//     "isStarted": false,
//     "selectedWord": "cat",
//     "selectedWordToLetters": [],
//     "guessedLetter": "",
//     "correctLetters": [],
//     "incorrectLetters": [],
//     "numGuesses": 10,
//     playGame: function() {

//     },
//     selectedWordToLetters: function(word) {
//         var letters = word.split("");
//         console.log(letters);
//     }
// }
// document.write("Press any key to get started.")
// $(document).ready(function () {
    var word = "madeleine";
    var wordLength = word.length;
    var wordArray = word.split("");
    var spaces = [];

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

createWord();
printWord();

document.onkeyup = function(event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    var isWrong = true;
    // If the letter is h, run the following functions/methods.
    for(i=0;i<wordLength; i++) {
        if (letter === wordArray[i]) {
            spaces[i] = letter;
            isWrong = false;
            $("#correct").html("");
            printWord();
        }
    }
    if (isWrong) {
        $("#incorrect").append(letter + " ");
    }
  };

// console.log(spaces);

// });
// if (myGame.isStarted) {
//     myGame.playGame();
// }

// document.onkeyup = function(event) {
//     var letter = event.key.toLowerCase();
//     myGame.guessedLetter = letter;

// }