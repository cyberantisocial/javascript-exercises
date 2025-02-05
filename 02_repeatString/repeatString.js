
const repeatString = function(string, num) {
    if (num >= 0){
let modString = ""
 while (num > 0){
    modString += string;
    num--;
 }   
 return modString}
 else return "ERROR";
  }


// Do not edit below this line
module.exports = repeatString;
