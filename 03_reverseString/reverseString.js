const reverseString = function(string) {
    let wordArray = string.split("")
    let wordArrayCopy = string.split("")
    let arrayLength = wordArray.length;
    let revArray = ("")
    while(arrayLength > 0) {
       revArray = revArray + wordArray.pop(wordArrayCopy.length -1);
        arrayLength = arrayLength - 1
    }
    return revArray
};

// Do not edit below this line
module.exports = reverseString;
