const convertToCelsius = function(fahrenheit) {
  let converted = (fahrenheit - 32) / 1.8;
  if (converted === 0){
    return converted;
  }else{
    return +converted.toFixed(1);
  }
};

const convertToFahrenheit = function(celsius) {
  let converted = (celsius * 1.8) + 32;
  if (converted === 0){
    return converted;
  }else{
    return +converted.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
