const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr);
};

const power = function(num, power) {
	return powerHelper(num, power, 1);
};

function powerHelper(number, power, currentIteration){
  if(currentIteration === power - 1){
    return number * number;
  }

  return powerHelper(number, power, currentIteration + 1) * number;
}

const factorial = function(factorial) {
  return factorialHelper(factorial);
};

function factorialHelper(num){
  if(num <= 1){
    return 1;
  }

  return factorialHelper(num - 1, factorial) * num;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
