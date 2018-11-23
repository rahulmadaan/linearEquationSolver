let {solveEquation} = require('../src/library.js');

const main = function() {
  let equation = process.argv[2];
  console.log('value of x is '+solveEquation(equation));
}
main();
