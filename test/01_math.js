const mocha = require('mocha');
const chai = require('chai');
chai.should();

const math = require('../math');


describe("Test divide function", () => {

  it('if a is not number throw error', () => {
    (() => {
      math.divide('bad param', 10)
    }).should.throw('a is not number');
  });


  it('Minh: if a is not number throw error ',function (){
	  (function () {
  		math.divide('bad param',10)
	  }).should.throw('a is not number')
  })


  it('if b is not number throw error', () => {
    (() => {
      math.divide(10, 'sily param')
    }).should.throw('b is not number');
  });

  it('throw divide by zero when b == 0', () => {
    (() => {
      math.divide(10, 0)
    }).should.throw('Divide to zero');
  });

  it('throw divide by zero when b == 0', () => {
    (() => {
      math.divide(10, 0)
    }).should.throw('Divide to zero');
  });

  it('10/2 = 5', () => {
    math.divide(10, 2).should.equal(5);
  });

  it('9/3=3',function(){
    math.divide(9,3).should.equal(3);
  })

  //Should not compare 2 floating number !
  it('10/3 = 3.3333', () => {
    math.divide(10.0, 3.0).should.equal(3.333333);
  });

});