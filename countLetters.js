const assertEqual = require('./assertEqual');
// FUNCTION IMPLEMENTATION
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