const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Game = require('../src/Game')
const game = new Game()
game.deployCurrentGame()

describe('Game', () => {

	it('should keep track of the current round', () => {
		expect(game.currentRound).to.be.an.instanceOf(Round)
	})
	
	it('should be able to create cards', () => {
		expect(game.cards.length).to.equal(30)
	})

	it('should be able to put the cards in a deck', () => {
		expect(game.deck.cards).to.equal(game.cards)
	})

	it('should be able to start a new round', () => {
		expect(game.currentRound.currentCards).to.equal(game.cards)
	})

})