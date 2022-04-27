const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (!arguments.length) {
		return "Unable to determine the time of year!";
	}
	try {
		let result = date.getMonth();
	} catch (error) {
		throw new Error("Invalid date!")
	}
	if (date[Symbol.toStringTag] === "Date") throw new Error("Invalid date!");

	let result = date.getMonth();
	if (result === 2 || result === 3 || result === 4) {
		return "spring";
	} else if (result === 5 || result === 6 || result === 7) {
		return "summer";
	} else if (result === 8 || result === 9 || result === 10) {
		return "autumn";
	} else if (result === 11 || result === 0 || result === 1) {
		return "winter";
	} throw new Error("Invalid date!");

	return result;
}

module.exports = {
	getSeason
};
