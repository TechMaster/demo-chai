/**
 * Created by techmaster on 3/29/17.
 */

const mocha = require('mocha')
const chai = require('chai')
chai.should()

const math = require('../factorial')
describe("test factorial function", () => {
	it('if n is not number throw error ', () => {
		(() => {
			math.factorial('n')

		}).should.throw('n is not number ')
	})

	it('factorial(5)=120',()=> {
		math.factorial(5).should.equal(120);
	})



})