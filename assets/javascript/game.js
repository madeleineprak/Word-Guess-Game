// Sets the variables.
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
var numWins = 0;
var gamesPlayed = 0;
$("#guesses").html(numGuesses);
$('#wins').html(numWins);
// Creates the spaces to represent the unguessed letters.
function createWord() {
    for (i = 0; i < wordLength; i++) {
        spaces.push("_");
    }
}
// Prints the word to the html at the "correct" div.
function printWord() {
    for (j = 0; j < wordLength; j++) {
        $("#correct").append(spaces[j] + " ");
    }
}
// Sets the initial game up.
function setUp() {
    createWord();
    printWord();
}
// Changes the photo set to match the word.
function changePhotos() {
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
}
// Resets the game for a new one.
function resetGame() {
    $("#correct").html("");
    $("#incorrect").html("");
    guessedLetters = [];
    spaces = [];
    win = false;
    lose = false;
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordLength = word.length;
    wordArray = word.split("");
    numGuesses = 5;
    setUp();
    changePhotos();
    console.log(word);
}
setUp();
changePhotos();
// Each time a user clicks the keyboard.
document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    var isWrong = true;
    var repeatLetter = false;
    wordLength = word.length;
    wordArray = word.split("");
    $("#guesses").html(numGuesses);
    $('#wins').html(numWins);
    // Only plays when the user hasn't won/lost yet.
    if (!lose && !win) {
        // Checks if the input is a valid letter.
        if (letter.length === 1 && letter.match(/[a-z]/i)) {
            for (i = 0; i < guessedLetters.length; i++) {
                if (letter === guessedLetters[i]) {
                    repeatLetter = true;
                }
            }
            if (repeatLetter) {
                alert("You already guessed that letter! Try a different one.")
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
                // Checks for win.
                if (spaces.join("") === word) {
                    win = true;
                    numWins++;
                    $('#wins').html(numWins);
                    resetGame();
                    alert("You win!");
                }
                // Checks if letter is wrong.
                if (isWrong) {
                    $("#incorrect").append(letter + " ");
                    numGuesses--;
                    $("#guesses").html(numGuesses);
                    // Checks for loss.
                    if (numGuesses <= 0) {
                        alert("You lose. The word was " + word + ".");
                        lose = true;
                        resetGame();
                    }
                }
            }
            // Alerts the user if the input is not a valid letter.
        } else {
            alert("Please enter a valid letter.")
        }
    }
};
