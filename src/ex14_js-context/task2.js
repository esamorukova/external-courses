'user strict'

function Hangman(word) {
    this.word = word.split('');
    this.result = [];
    this.string = '';
    this.error = 6;
    this.errorLetter = [];

    for (var j = 0; j < this.word.length; j++) {
        this.result.push('_')
    }
    this.guess = function(letter) {
        if (this.error > 1) {
            var letter = letter;
            for (var i = 0; i < this.word.length; i++) {
                if (this.word[i] === letter) {
                    this.result[i] = letter;
                }
            }
            if (this.result.indexOf(letter) !== -1) {
                if (this.result.indexOf("_") === -1) {
                    this.string = this.result.join('') + '| You won!'
                } else {
                    this.string = this.result.join('')
                }


            } else {
                this.errorLetter.unshift(letter);
                this.error--;
                this.string = 'wrong letter, errors left ' + this.error + '|' + this.errorLetter.join(' ')

            }
        } else {
            this.string = 'game over'
        }

        console.log(this.string)
        return this
    }
    this.getGuessedString = function() {
        console.log(this.result.join(''));
        return this
    };
    this.getErrorsLeft = function() {
        console.log(this.error);
        return this
    };
    this.getWrongSymbols = function() {
        console.log(this.errorLetter);
        return this
    };
    this.startAgain = function(newWord) {
        this.word = newWord.split('');;
        this.result = [];
        this.errors = 6;
        this.errorLetter = [];
        this.message = '';
        for (let i = 0; i < this.word.length; i++) {
            this.result.push('_')
        }
    }
}


var hangman = new Hangman('webpurple');
hangman.guess('w');
hangman.guess('k');
hangman.guess('k');
hangman.guess('k');
hangman.guess('k');
hangman.guess('k');
hangman.guess('k');