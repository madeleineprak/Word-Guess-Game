// Sets the variables.
var word = "";
var round = 1;
var wordBank = ["bill gates", "tom cruise", "jet li", "shaquille", "snoop dog", "jim carrey"];
var photoBank = ["assets/images/bill.jpg", "assets/images/gates.jpg", "assets/images/tom.png", "assets/images/cruise.jpg", "assets/images/jet.jpg", "assets/images/lee.jpg", "assets/images/shack.jpg", "assets/images/eel.jpg", "assets/images/snoop.jpg", "assets/images/dog.jpg", "assets/images/gym.jpg", "assets/images/carry.jpg"];
word = wordBank[(round - 1)];
var wordLength = word.length;
var wordArray = word.split("");
var spaces = [];
var guessedLetters = [];
var numGuesses = 5;
var lose = false;
var win = false;
var gameStarted = false;
var numWins = 0;
$("#guesses").html(numGuesses);
$('#wins').html(numWins);
// Creates the spaces to represent the unguessed letters.
function createWord() {
    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === " ") { // Checks for spaces.
            spaces.push(" ");
        } else {
            spaces.push("_");
        }
    }
}
// Prints the word to the html at the "correct" div.
function printWord() {
    for (j = 0; j < wordArray.length; j++) {
        if (wordArray[j] === " ") {
            $("#correct").append("&nbsp;");
        } else {
            $("#correct").append(spaces[j] + " ");
        }
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
    } else if (word === wordBank[5]) {
        $("#photo-one").attr("src", photoBank[10]);
        $("#photo-two").attr("src", photoBank[11]);
    }
}
// Resets the game for a new one.
function resetGame() {
    round++ 
    if (round > 6) {
        round = 1;
    }
    $("#correct").html("");
    $("#incorrect").html("");
    guessedLetters = [];
    spaces = [];
    win = false;
    lose = false;
    word = wordBank[(round - 1)];
    wordArray = word.split("");
    numGuesses = 5;
    setUp();
    changePhotos();
    console.log(word);
}

setUp();
changePhotos();
console.log(word);
// Each time a user clicks the keyboard.
document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    var isWrong = true;
    var repeatLetter = false;
    wordArray = word.split("");
    $("#guesses").html(numGuesses);
    $('#wins').html(numWins);
    // If player won, resets game on key-click.
    if (win) {
        resetGame();
        // Only plays when the user hasn't won/lost yet.
    } else if (!lose && !win) {
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
                for (i = 0; i < wordArray.length; i++) {
                    // Checks if letter is right.
                    if (letter === wordArray[i]) {
                        isWrong = false;
                        spaces[i] = letter;
                        $("#correct").html("");
                        printWord();
                    } 
                }
                // Checks if letter is wrong.
                if (isWrong) {
                    $("#incorrect").append(letter + " ");
                    numGuesses--;
                    $("#guesses").html(numGuesses);
                }
                
            }
            // Alerts the user if the input is not a valid letter.
        } else {
            alert("Please enter a valid letter.")
        }
        // Checks for win.
        if (spaces.join("") === word) {
            win = true;
            numWins++;
            $('#wins').html(numWins);
            alert("You win! Press any key to play the next round.");
        }
        
        // Checks for loss.
        if (numGuesses <= 0) {
            alert("You lose. The celebrity was " + _.startCase(_.toLower(word)) + ".");
            lose = true;
            resetGame();
        }
    }
};
