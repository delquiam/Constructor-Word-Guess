var inquirer = require("inquirer");
function Letter(letter) {
    this.letter = letter;
    this.isCorrect = false;
};

Letter.prototype.displayCharacter = function () {
    if (this.isCorrect)
        return this.letter;
    else
        return " _ ";
};

Letter.prototype.checkGuessedLetter = function (guessedLetter) {
    if (guessedLetter.toLowerCase() === this.letter.toLowerCase())
        this.isCorrect = true;
    else
        this.isCorrect = false;
};

// var character=new Letter('j');
// console.log(character.displayCharacter());

// character.checkGuessedLetter('j');
// console.log(character.displayCharacter());


module.exports = Letter;
//  * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly