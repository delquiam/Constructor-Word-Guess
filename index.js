var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

var starbucks = [
    'Coffee',
    'Frappuccino',
    'Cappuccino',
    'Macchiato',
    'Americano',
    'Mocha',
    'Espresso',
    'Latte'
];
var guessesLeft = 11;
var userGuesses = [];
var coffee = new Word("");//holds the word for game


Word.prototype.createLetterArray = function (word) {
    var arr = [];
    for (var i = 0; i < word.length; i++) {
        var newLetterObj = new Letter(word.charAt(i));
        arr.push(newLetterObj);
    }
    this.letters = arr;
}

function newGame(){
var luckyLetter = starbucks[Math.floor(Math.random() * starbucks.length)];
coffee.createLetterArray(luckyLetter);
console.log(coffee.displayWord());
}

function guessMyDrink() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Guess a letter',
                name: 'letter'
            }
        ])
        .then(answers => {
            coffee.compareLetterToWord(answers.letter.toLowerCase());
            console.log(coffee.displayWord());
//add guesses left --
            if (guessesLeft === 0) {
                console.log('Sorry, you lost the game');
            }
            else if (coffee.displayWord().indexOf("_") == -1) {
                console.log('You Win!');
            }
            else {
                guessMyDrink();
            }
        });
}

function gameOver() {
    {
        console.log('Game Over!')
    }
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Would you like to play again?',
                name: 'playAgain'
            }
        ])
        .then(answers => {
            if (answers.playAgain) {
                newGame();
                guessMyDrink();
            } else {
                console.log("No worries, see you next time!")
            }
        })
}
//restart game

newGame();
guessMyDrink();


