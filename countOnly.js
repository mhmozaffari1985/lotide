const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (var key of Object.keys(itemsToCount)) {
    let counter = 0;
    for (const item of allItems) {
      if (item === key && itemsToCount[key]) {
        counter++;
      }
    }
    if (counter !== 0) {
      result[key] = counter;
    }
  }
  return result;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);