describe("Hangman", function() {
  describe("initialize", function() {
    it("establish a word to play with and variables and methods for body parts and letters in given word", function() {
      var newGame = Object.create(Hangman);
      newGame.initialize("bob");
      newGame.word.should.eql(["b","o","b"]);
      newGame.currentBodyPart.should.equal(0);
    });
  });
  describe("letterLookUp", function() {
    it("take a letter and return character position in given word", function() {
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.letterLookUp("o").should.eql([1]);
    });

    it("take a letter and return all character positions in given word for duplicates", function() {
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.letterLookUp("b").should.eql([0, 2]);
    });

    it("take a letter and return false if it doesn't exist.", function() {
      var newGame = Object.create(Hangman);
      newGame.word = ["b","o","b"];
      newGame.letterLookUp("k").should.eql(false);
    });
  });

});
