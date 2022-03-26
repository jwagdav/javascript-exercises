const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0); 
};

const multiply = function(array) {
  return array.length ? array.reduce((a, b)=> a * b) : 0;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	if(x === 0){
    return 1;
  } else {
    for(let i = x - 1; i > 0; i--){
      x *= i;
    }
  }
  return x;
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
