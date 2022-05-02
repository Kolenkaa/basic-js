const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	const Index = email.lastIndexOf('@');
	const emailDomain = email.slice(Index + 1, email.length);
	return emailDomain;
}
module.exports = {
	getEmailDomain
};
