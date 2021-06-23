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

const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

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