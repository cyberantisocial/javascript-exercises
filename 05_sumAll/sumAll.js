const sumAll = function(firstInt, lastInt) {
    if(parseFloat(firstInt) > 0 && parseFloat(lastInt) > 0 && Number.isInteger(firstInt)==true && Number.isInteger(lastInt)== true){
    const numArray = []
    const secondArray = [firstInt, lastInt]
    secondArray.sort()
    let minItem = Math.min(secondArray[0])
    let maxItem = Math.max(secondArray[1])
    
    for(i = minItem; i <= maxItem; i++){
        numArray.push(i);
    }
    
    
    return numArray.reduce((a, b) => a + b, 0)}
    else{return("ERROR")}
} 
    
    // Do not edit below this line
    module.exports = sumAll;