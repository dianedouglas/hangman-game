describe("Hangman", function() {
  describe("initialize", function() {
    it("establish a word to play with and variables and methods for body parts and letters in given word", function() {
      var newGame = Object.create(Hangman);
      newGame.initialize("bob");
      newGame.word.should.eql(["b","o","b"]);
      newGame.currentBodyPart.should.equal(0);
      newGame.correctLetters.should.eql([]);
      newGame.wrongLetters.should.eql([]);
    });
  });
  describe("letterLookUp", function() {
    it("take a letter and return character position in given word", function() {
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.correctLetters = [];
      newGame.wrongLetters = [];
      newGame.letterLookUp("o").should.eql([1]);

    });

    it("take a letter and return all character positions in given word for duplicates", function() {
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.correctLetters = [];
      newGame.wrongLetters = [];
      newGame.letterLookUp("b").should.eql([0, 2]);
    });

    it("take a letter and return all character positions in given word for duplicates and add to correct letters", function() {
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.correctLetters = [];
      newGame.wrongLetters = [];
      newGame.letterLookUp("b");
      newGame.correctLetters.should.eql(["b", , "b"]);
    });

    it("take a letter and return false if it doesn't exist and add it to wrong letters.", function() {
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.correctLetters = [];
      newGame.wrongLetters = [];
      newGame.letterLookUp("k").should.eql(false);
      newGame.wrongLetters.should.eql(["k"]);
    });
  });
  describe("isWordComplete", function(){
    it("if word is equal to correctLetters return true.", function(){
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.correctLetters = [];
      newGame.wrongLetters = [];
      newGame.letterLookUp("b");
      newGame.letterLookUp("o");
      newGame.isWordComplete().should.equal(true);
    });

    it("if word is not equal to any in correctLetters return false.", function(){
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.correctLetters = [];
      newGame.wrongLetters = [];
      newGame.letterLookUp("b");
      newGame.isWordComplete().should.equal(false);
    });
  });
  describe("isBodyComplete", function(){
    it("if the the number of wrong letters exceeds the number of body parts available return true--game over", function(){
      var newGame = Object.create(Hangman);
      newGame.wrongLetters = ["a","g","o","b","c","v","h"];
      newGame.isBodyComplete().should.equal(true);
    });
    it("if the the number of wrong letters is fewer than the number of body parts available return false", function(){
      var newGame = Object.create(Hangman);
      newGame.wrongLetters = ["o","b","c","v","h"];
      newGame.isBodyComplete().should.equal(false);
    });
  });
});
