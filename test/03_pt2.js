/**
 * Created by techmaster on 3/29/17.
 */
const mocha = require('mocha')
const chai = require('chai')
chai.should()
const math = require('../pt2')

describe("test pt2 function",function () {
	it('if a is not number throw error',function(){
		(function() {
			math.pt2('bad param', 10, 2)
		}).should.throw('a is not number')
	})

	it('if b is not number throw error',function(){
		(function() {
			math.pt2(1, 'abc', 2)
		}).should.throw('b is not number')
	})

	it('if c is not number throw error',function(){
		(function() {
			math.pt2(1, 2, 'abc')
		}).should.throw('c is not number')
	})

	it('if delta < 0 throw error',function () {
		(function () {
			math.pt2(1, 1, 1)

		}).should.throw('delta nho hon 0')
	})


});
