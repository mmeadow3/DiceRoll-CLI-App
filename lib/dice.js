const {randomInt} = require('./math')

function toDiceNotation(obj) {
  return (`${obj.count}d${obj.sides}`)
}

function roll(string) {
  // return randomInt(obj.count * obj.sides)
}




module.exports = {roll, toDiceNotation};

// The roll method should accept a dice notation String
// and produce a random Number which is the result of the dice roll.
