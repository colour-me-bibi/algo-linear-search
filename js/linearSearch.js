/**
 * This function returns the indices of all occurrences of the valueToFind in the arrayToSearchThrough.
 *
 * @param {Any} valueToFind
 * @param {Array} arrayToSearchThrough
 * @returns {Array} The indices of all occurrences of the valueToFind in the arrayToSearchThrough.
 */
const linearSearchGlobal = (valueToFind, arrayToSearchThrough) => {
  const result = [];

  for (let i = 0; i < arrayToSearchThrough.length; i++)
    if (arrayToSearchThrough[i] === valueToFind) result.push(i);

  return result;
};

/**
 * This function returns the index of the first occurrence of the valueToFind in the arrayToSearchThrough
 * or undefined if the valueToFind is not found.
 *
 * @param {Any} valueToFind The value to find in the array.
 * @param {Array} arrayToSearchThrough The array to search through.
 * @returns {Number} The index of the first occurrence of the valueToFind in the arrayToSearchThrough or undefined if the valueToFind is not found.
 */
const linearSearch = (valueToFind, arrayToSearchThrough) => {
  for (let i = 0; i < arrayToSearchThrough.length; i++)
    if (arrayToSearchThrough[i] === valueToFind) return i;

  return undefined;
};

module.exports = { linearSearch, linearSearchGlobal };
