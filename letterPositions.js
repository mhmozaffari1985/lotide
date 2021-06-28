const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function(sentence) {
  const results = {};
  let array = sentence.split("");
  for (let i = 0; i < array.length; i++) {
    if (results[array[i]]) {
      results[array[i]].push(i);
    } else {
      results[array[i]] = [];
      results[array[i]].push(1);
    }
  }
  return results;
};


//console.log(letterPositions("hello"))


assertArraysEqual(letterPositions("hello").e, [1]);