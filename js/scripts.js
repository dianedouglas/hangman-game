var Hangman = {
  initialize: function(word) {
    this.word = word.split("");
    this.currentBodyPart = 0;
  },
  letterLookUp: function(letter) {
    var letterIndices = [];
    if(this.word.indexOf(letter) >= 0){
      for(var i = 0; i < this.word.length; i++){
        if(this.word[i] === letter){
          letterIndices.push(i);
        }
      }
      return letterIndices;
    }
    return false;
  },
  isBodyComplete: function() {

  },
  isWordComplete: function() {

  }
};
