const convertToCelsius = function(farenheit) {
  //-32 * 0.5556
  return Math.round(((farenheit - 32) * 0.5556) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  // * 1.8 + 32
  return Math.round(((celsius * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
