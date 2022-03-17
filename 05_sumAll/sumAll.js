const sumAll = function(x, y) {
    if(!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0){
        return "ERROR";
    }
    if(x < y){
        return (y * (y + x)) / 2;
    } else if ( x > y){
        return (x * (x + y)) / 2;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
