const { assert: { isFunction } } = require('chai')

const parseArgs = require('../lib/parse-args')

describe('parse-args', () => {
  it('should be a function', () => {
    isFunction(parseArgs)
  })
})
