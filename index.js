var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

var coffee = ['Cafe Latte',
    'Iced Coffee',
    'Frappucino',
    'Cappucino',
    'Macchiato',
    'Cold Brew',
    'Mocha'
];
var guessesLeft = 8;
var userGuesses = [];
var holder = new Word("");//holds the word for game


Word.prototype.createLetterArray = function (word) {
    var arr = [];
    for (var i = 0; i < word.length; i++) {
        var newLetterObj = new Letter(word.charAt(i));
        arr.push(newLetterObj);
    }
    this.letters = arr;
}

var luckyLetter = coffee[Math.floor(Math.random() * coffee.length)];
holder.createLetterArray(luckyLetter);
console.log(holder.displayWord());

function guessMyDrink() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Pick a letter',
                name: 'letter'
            }
        ])
        .then(answers => {
            holder.compareLetterToWord(answers.letter.toLowerCase());
            console.log(holder.displayWord());
            if (guessesLeft === 0) {
                console.log('Sorry, you lost the game');
            }
            else if(holder.displayWord().indexOf("_")==-1){
                console.log('You Win!');
            }
            else{
                guessMyDrink();
            }
        });
}
guessMyDrink();
