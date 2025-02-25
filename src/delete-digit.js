const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let arrForNumbers = [];
	let arr = String(n).split("");
	for (let i = 0; i < arr.length; i++) {
		let arrWithoutOneNumber = arr.slice();
		arrWithoutOneNumber.splice(i, 1);
		arrForNumbers.push(+(arrWithoutOneNumber.join('')));
	}
	return Math.max(...arrForNumbers)
}

module.exports = {
	deleteDigit
};
