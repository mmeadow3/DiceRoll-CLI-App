const { assert: { isFunction, strictEqual } } = require('chai')

const { toDiceNotation, roll } = require('../lib/dice')

describe('dice', () => {
  describe('toDiceNotation', () => {
    it('should be a function', () => {
      isFunction(toDiceNotation)
    })
    it('should convert with a count and sides property to dice notation', () => {
      const die = { count: 2, sides: 24 }
      const expected = '2d24'
      strictEqual(toDiceNotation(die), expected)
    })
  })

  describe('roll', () => {
    it('should be a function', () => {
      isFunction(roll)
    })
  })
})
