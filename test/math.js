// var math = require("../lib/math");
// var dice = require("../lib/dice");
// var parseArgs = require("../lib/parse-args");
// var chai = require('chai');
// var should = chai.should();
// var assert = chai.assert;

const { isFunction } = require('chai').assert

const { randomInt } = require('../lib/math')
describe('math', () => {
  describe('randomInt', () => {
    it('should be a function', () => {
      isFunction(randomInt)
    })
  })
})

const parseArgs = require('../lib/parse-args')

describe('parse-args', () => {
  it('should be a function', () => {
    isFunction(parseArgs)
  })
})
