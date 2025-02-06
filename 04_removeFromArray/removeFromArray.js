const removeFromArray = function(obj,...toBeRemoved) {
let toBeRemovedLength = toBeRemoved.length // 
let objIndex = 0
let tobeRemovedIndex = 0
let objLength = obj.length


while(tobeRemovedIndex != toBeRemovedLength && objIndex != objLength){  // Only verify array if the index isn't equal to the length (so it doesnt keep adding after the length )
    while(obj[objIndex]!==toBeRemoved[tobeRemovedIndex] && objIndex<objLength){ // Loops while the object isnt equal to the toBeRemoved object
    objIndex++;}                                                              // otherwise it will add +1 to the index so it searches again
    if(obj[objIndex] === toBeRemoved[tobeRemovedIndex])           // verifies if the objects are the same and splices it with the index it has found the object
    {obj.splice(objIndex, 1)}
    if(toBeRemovedLength >= 1 && objIndex >= objLength) // adds to toBeRemovedIndex only if the index is bigger than 0 and the length isn't equal to 1
    {tobeRemovedIndex++; objIndex = 0}                                // otherwise it just returns loops until it can return to the obj
     // resets object index                                      
} 

return obj}


// Do not edit below this line
module.exports = removeFromArray;
