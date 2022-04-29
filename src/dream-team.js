const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

	const isArray = Array.isArray(members);
	if (!isArray) {
		return false;
	}

	const firstLetter = members
		.filter((item) => typeof item === 'string')
		.map((member) => member.trim())
		.map((word) => word[0])
		.join('')
		.toUpperCase()
		.split('')
		.sort()
		.join('')
	return firstLetter;
}

module.exports = {
	createDreamTeam
};
