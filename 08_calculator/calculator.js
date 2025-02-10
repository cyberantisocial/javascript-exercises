const add = function(add1, add2) {
return add1 + add2
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2
};

let sumArray = []
const sum = function(sumArray){ 
let arrayStart = 0
for(let i = 0; i < sumArray.length; i++){
  arrayStart += sumArray[i]
}
return arrayStart;
};
let multArray = []
const multiply = function(multArray) {
  let arrayStart = 1
  for(let i = 0; i < multArray.length; i++){
    arrayStart *= multArray[i]
  }
  return arrayStart;
};

const power = function(num, pow) {
  let numOrig = num
  for(i = 1; i<pow; i++){
    num = num*numOrig}
    return num
};

const factorial = function(num) {
  if (num>1){
  let originalNum = num
  for(i = originalNum -1; i > 0; i-- ){
    num = num * i;
  }
  return num}
  else {return 1}
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
