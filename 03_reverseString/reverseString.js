const reverseString = function(string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    
    const newString = reverseArray.join("");
    
    return newString;
};




// Do not edit below this line
module.exports = reverseString;
