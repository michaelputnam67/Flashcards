const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', () => {
	let game;
	let round;
	let deck;
	let card1;
	let card2;
	let card3;

	beforeEach(() => {
		card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
		deck = new Deck([card1, card2, card3])
		round = new Round(deck)
		game = new Game(round)
		
	})

	it('should keep track of the current round', () => {
		expect(game.currentRound).to.equal(round)
	})
	
	it('should be able to create cards', () => {
		game.start()
		expect(game.cards.length).to.equal(30)
	})

	it('should be able to put the cards in a deck', () => {
		game.start()
		expect(game.deck.cards).to.equal(game.cards)
	})

	it('should be able to start a new round', () => {
		game.start()
		expect(game.currentRound.currentCards).to.equal(game.cards)
	})

})