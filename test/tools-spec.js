var math = require("../lib/math");
var dice = require("../lib/dice");
var parseArgs = require("../lib/parse-args");
var chai = require('chai');
var should = chai.should();
var assert = chai.assert;


describe("randomInt", function(){
  it("Should return a value between 1 and 6", function(){

      var results = math.randomInt();

    		results.should.be.within(1, 6);
  })
})
describe("parseArgs", function(){
  it("Should return 2 arguments as numbers", function(){
      // 
      // var results = parseArgs.parseArgs(arg1, arg2);
      //
      //   expect(results.arg1).to.not.be.undefined;
      })
})
