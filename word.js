var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];


}

Word.prototype.createLetterArray = function () {
    for (var i = 0; i < this.word.length; i++) {
        var newLetterObj = new Letter(this.word.charAt(i));
        this.letters.push(newLetterObj);
    }
}

Word.prototype.displayWord = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.letters[i].displayCharacter();
    }
}

Word.prototype.compareLetterToWord = function (guessedLetter) {
    for (var i = 0; i < this.letters.length; i++) {
        this.letters[i].checkGuessedLetter(guessedLetter);
    }
}


// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
