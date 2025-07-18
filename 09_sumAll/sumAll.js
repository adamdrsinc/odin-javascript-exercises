const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }

    if(a < 0 || b < 0){
        return "ERROR";
    }

    let num1 = Math.min(a, b);
    let num2 = Math.max(a, b);
    let sum = 0;

    for(let i = num1; i <= num2; i++){
        sum += i;
    }

    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
