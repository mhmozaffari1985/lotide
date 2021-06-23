// TEST/ASSERTION FUNCTIONS
const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (Array.isArray(actual)) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    }
  }
};


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

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);