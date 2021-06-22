const assertEqual = function(actual, expected) {
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

const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const flatten = function(array) {
  let output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let elm of element) {
        output.push(elm);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);