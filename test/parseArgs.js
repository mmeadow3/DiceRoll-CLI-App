const { assert: { isFunction, deepEqual } } = require('chai')

const parseArgs = require('../lib/parse-args')

describe('parse-args', () => {
  it('should be a function', () => {
    isFunction(parseArgs)
  })
  it('should handle no arguments', () => {
    const args = []
    const expected = { count: 1, sides: 6 }
    deepEqual(parseArgs(args), expected)
  })
  it('should handle 1 arguments', () => {
    const args = [22]
    const expected = { count: 1, sides: 22 }
    deepEqual(parseArgs(args), expected)
  })
  it('should handle 2 arguments', () => {
    const args = [5,10]
    const expected = { count: 5, sides: 10 }
    deepEqual(parseArgs(args), expected)
  })
})
