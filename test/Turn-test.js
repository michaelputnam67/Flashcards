const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
	let turn;
	let card;

	beforeEach(() => {
		card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		turn = new Turn('object', card)
	})

	it('should take a user\'s guess', () => {
		expect(turn.guess).to.equal('object')
	})

	it('should be able to take an instantiation of the Card class', () => {
		expect(turn.card).to.equal(card)
	})

	it('should be able to make a guess', () => {
		expect(turn.returnGuess()).to.equal('object')
	})

	it('should be able to return a card', () => {
		expect(turn.returnCard()).to.equal(card)
	})

	it('should be able to evaluate a guess', () => {
		expect(turn.evaluateGuess()).to.equal(true)
	})

	it('should be able give feedback', () => {
		expect(turn.giveFeedback()).to.equal('correct!')
	})

});