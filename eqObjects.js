
const assertEqual = function(actual, expected) {
  if (Array.isArray(actual)) {
    if (eqArrays(actual, expected)) {
      //console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
      return true;
    } else {
      //console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
  } else {
    if (actual !== expected) {
      //console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
      return false;
    } else {
      //console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
      return true;
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


const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (assertEqual(object[key] , value))
      return key;
  }
  return undefined;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  
  let flag = true;
  for (const key of Object.keys(object1)) {
    // console.log(findKeyByValue(object2, object1[key]) + " - " + key + " - " +object1[key])
    // console.log(assertEqual(findKeyByValue(object2, object1[key]) , key))
    if (!assertEqual(findKeyByValue(object2, object1[key]) , key))
      flag = flag && false;
  }
  return flag;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false