const convertToCelsius = function(fahrenheitEntry) {
  let unRounded = (fahrenheitEntry - 32) * (5/9);
  return Math.round(unRounded * 10) / 10;
};

const convertToFahrenheit = function(celsuisEntry) {
  let unRounded = (celsuisEntry * (9/5)) + 32; 
  return Math.round(unRounded * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
