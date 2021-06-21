'use strict';

for (let i = 2; i < process.argv.length; i++) {
  console.log(reverseString(process.argv[i]));
}

const reverseString = function(str) {
  return str.split("").reverse().join("");
};