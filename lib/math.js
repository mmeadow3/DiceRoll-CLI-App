'use strict'

const randomInt = (max, min) => {
  min = 1
  max = Math.floor(max) || 6
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = {randomInt}
