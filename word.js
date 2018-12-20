var Letter = require("./letter.js");

function Word(word) {
    this.letters = word;
}



Word.prototype.displayWord = function () {
    var displayWord = "";
    for (var i = 0; i < this.letters.length; i++) {
        displayWord += this.letters[i].displayCharacter();
    }
    return displayWord;//will give string
}

Word.prototype.compareLetterToWord = function (guessedLetter) {
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].letter.toLowerCase() == guessedLetter) {
            this.letters[i].checkGuessedLetter(guessedLetter);
        }
    }
}

// var word = new Word([new Letter ('a'),new Letter ('b'), new Letter ('c'), new Letter('d')]);
// console.log(word);
// console.log(word.displayWord());
// word.compareLetterToWord('b');
// console.log(word.displayWord());

module.exports = Word;


// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
