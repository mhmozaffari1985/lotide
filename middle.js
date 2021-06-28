// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else if (array.length % 2 === 1) {
    return [array[Number.parseInt(array.length / 2)]];
  }
};

module.exports = middle;