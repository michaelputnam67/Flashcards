const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(round) {
    this.currentRound = round;
    this.cards = [];
    this.deck = {};
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
   this.cards = prototypeQuestions.map((card) => 
      new Card(card.id, card.question, card.answers, card.correctAnswer)
    )
    this.deck = new Deck(this.cards)
    this.currentRound = new Round(this.deck)
    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;