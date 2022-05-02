const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

	const transformedArr = [];

	const DOUBLE_PREV = "--double-prev";
	const DOUBLE_NEXT = "--double-next";
	const DISCARD_PREV = "--discard-prev";
	const DISCARD_NEXT = "--discard-next";

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== DOUBLE_PREV && arr[i] !== DOUBLE_NEXT && arr[i] !== DISCARD_PREV && arr[i] !== DISCARD_NEXT) {
			return arr;
		}
		if (arr[i] === DOUBLE_PREV) {
			transformedArr = [
				...arr.slice(0, i),
				arr[i - 1],
				...arr.slice(i + 1)
			];
		}
		if (arr[i] === DOUBLE_NEXT) {
			transformedArr = [
				...arr.slice(0, i),
				arr[i + 1],
				...arr.slice(i + 1)
			];
		}
		if (arr[i] === DISCARD_PREV) {
			transformedArr = [...arr.slice(0, i - 1), ...arr.slice(i + 1)];
		}
		if (arr[i] === DISCARD_NEXT) {
			transformedArr = [
				...arr.slice(0, i),
				arr[i - 1],
				...arr.slice(i + 2)
			];
		}
	}

}

module.exports = {
	transform
};
