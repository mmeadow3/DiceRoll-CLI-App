const {randomInt} = require('./math')

function toDiceNotation(obj) {
  return (`${obj.count}d${obj.sides}`)
}

function roll(string) {
    arr = string.split('d')
console.log(randomInt())
}


module.exports = {roll, toDiceNotation};
