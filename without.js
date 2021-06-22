// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  console.log(actual);
  console.log(expected);
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

const eqArrays = function (a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const without = function (source, itemsToRemove) {
  source = Array.from(source);
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if(itemsToRemove[i] === source[j]) {
        source.splice(j,1);
      }
    }
  }
  return source;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// // TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertEqual(words, ["hello", "world", "lighthouse"]);