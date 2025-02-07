const convertToCelsius = function(degreeF) {
degreeF = (degreeF - 32)*5/9;
degreeF = (degreeF * 10 / 10).toFixed(1);
degreeF = parseFloat(degreeF);
return degreeF;
};

const convertToFahrenheit = function(degreeC) {
  degreeC = (9/5 * degreeC) + 32;
  degreeC = (degreeC * 10 / 10).toFixed(1);
  degreeC = parseFloat(degreeC)
  return degreeC;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
