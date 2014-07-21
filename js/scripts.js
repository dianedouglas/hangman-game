var Hangman = {
  initialize: function(word) {
    this.word = word.split("");
    this.correctLetters = [];
    this.wrongLetters = [];
  },
  letterLookUp: function(letter) {
    var letterIndices = [];
    if(this.word.indexOf(letter) >= 0){
      for(var i = 0; i < this.word.length; i++){
        if(this.word[i] === letter){
          letterIndices.push(i);
          this.correctLetters[i] = letter;
        }
      }
      return letterIndices;
    }
    this.wrongLetters.push(letter);
    return false;
  },
  isBodyComplete: function() {
    if(this.wrongLetters.length >= 7){
      return true;
    }else {
      return false;
    }
  },
  isWordComplete: function() {
    var allLettersMatch = true;
    for (var i=0; i<this.word.length; i++) {
      if (this.word[i] !== this.correctLetters[i]) {
        allLettersMatch = false;
      }
    }
    return allLettersMatch;
  }
};

$(document).ready(function(){
  var hangmanGame;

  $("#start-word").submit(function(event){
    event.preventDefault();
    hangmanGame = Object.create(Hangman);
    hangmanGame.initialize($('#word').val());
    $("#start-word").hide();
    $("#letter-guess").show();
    hangmanGame.word.forEach(function(eachletter) {
      $(".correct-letters p").append(" __ ");
    });
    $(".hangman-pic").append("<img src='img/90px-Hangman-0.png'>")
  })

  $("#letter-guess").submit(function(event){
    event.preventDefault();
    var userLetter = $("#letter").val();
    var letterLookUpResult = hangmanGame.letterLookUp(userLetter);
    if(!letterLookUpResult){
      $(".wrong-letters p").text(hangmanGame.wrongLetters);
      $("#letter").val("");
      $(".hangman-pic").replaceWith("<img src='img/90px-Hangman-"+ hangmanGame.wrongLetters.length +".png'>");
    } else {

    }

  })
})
