const add = function(firstVal, secondVal) {
  let sum = firstVal + secondVal;
  return sum;
};

const subtract = function(firstVal, secondVal) {
	let sum = firstVal - secondVal;
  return sum;
};

const sum = function(arr) {

  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

};

const multiply = function(arr) {

  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);

};

const power = function(base, pow) {

  return base ** pow;

};

const factorial = function(n) {

  arr = [1]
  for (i = 2; i <= n; i++) {
    arr.push(i);
  }

  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
