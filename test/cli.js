"use strict";

const { exec } = require("child_process");
const { assert: { oneOf } } = require("chai");

	describe("cli", function(){
		it("should run with no args", (done)=> {
			exec("bin/diceroll", (err, stdout) => {
				if (err) cb(err)
				oneOf(stdout.toString(), ['1\n','2\n', '3\n', '4\n', '5\n', '6\n'])
				done()
			})
		})
		it("should run with 1 arg", (done)=> {
			exec("bin/diceroll 10", (err, stdout) => {
				if (err) cb(err)
				oneOf(stdout.toString(), ['1\n','2\n', '3\n', '4\n', '5\n', '6\n', '7\n', '8\n', '9\n', '10\n'])
				done()
			})
		})	
		it("should run with 2 args", (done)=> {
			exec("bin/diceroll 2 2", (err, stdout) => {
				if (err) cb(err)
				oneOf(stdout.toString(), ['2\n', '3\n', '4\n'])
				done()
			})
		})
		
	})