// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} ===${expected}`);
  }
};

const countLetters = function(inputString) {
  const result = {};
  let array = inputString.split("");
  for (let i = 0; i < array.length; i++) {
    if (result[array[i]]) {
      result[array[i]] += 1;
    } else {
      result[array[i]] = 1;
    }
  }
  return result;
};
// TEST CODE
console.log(countLetters('HelloWorld!'));