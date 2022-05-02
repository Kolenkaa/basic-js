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
	else if (arr.length === 0) {
		return [];
	}

	const DOUBLE_PREV = "--double-prev";
	const DOUBLE_NEXT = "--double-next";
	const DISCARD_PREV = "--discard-prev";
	const DISCARD_NEXT = "--discard-next";

	const transformedArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === DOUBLE_PREV) {
			if (i > 0) {
				transformedArr.push(arr[i - 1]);
			}
		}
		if (arr[i] === DOUBLE_NEXT) {
			if (i < arr.length - 1) {
				transformedArr.push(arr[i + 1]);
			}
		}
		if (arr[i] === DISCARD_PREV) {
			if (transformedArr.length > 0) {
				transformedArr.pop();
			}
		}
		if (arr[i] === DISCARD_NEXT) {
			if (i < arr.length - 1) {
				i++;
			}
		}
		if (arr[i] !== DOUBLE_PREV && arr[i] !== DOUBLE_NEXT && arr[i] !== DISCARD_PREV && arr[i] !== DISCARD_NEXT) {
			return arr;
		}
	}

}

module.exports = {
	transform
};
