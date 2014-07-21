describe("Hangman", function() {
  describe("initialize", function() {
    it("establish a word to play with and variables and methods for body parts and letters in given word", function() {
      var newGame = Object.create(Hangman);
      newGame.initialize("bob");
      newGame.word.should.equal("bob");
      newGame.currentBodyPart.should.equal(0);

    });
  });
  // it("take a letter and return character position in given word", function() {

  // });
});
