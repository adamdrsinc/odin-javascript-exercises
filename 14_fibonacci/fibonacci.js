const fibonacci = function(num) {
    const numAsInteger = Number.parseInt(num);

    if(numAsInteger < 0){
        return "OOPS";
    }

    if(numAsInteger === 0) return 0;
    if(numAsInteger === 1) return 1;

    let num1 = 0;
    let num2 = 1;
    let num3 = 0;

    for(let i = 0; i < numAsInteger-1; i++){
        num3 = num1 + num2;

        num1 = num2;
        num2 = num3;        
    }

    return num3;
};

// Do not edit below this line
module.exports = fibonacci;
