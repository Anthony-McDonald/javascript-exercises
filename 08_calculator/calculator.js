const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrToSum) {
  toReturn = 0;
  
  for (let entry in arrToSum) {
    toReturn += arrToSum[entry];
  }

  return toReturn
};

const multiply = function(list) {
  toReturn = 0;
  for (let arg in list)
  if (Number(arg) == 0) {
    toReturn += list[Number(arg)];
  } else {
    toReturn *= list[Number(arg)];
  }
  return toReturn;

};

const power = function(num1, num2) {

	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let counter = 1;
  let toReturn = 1;
  
  while (counter != num + 1) {
    toReturn *= counter
    counter++;
  }
  return toReturn;
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
