const removeFromArray = function(arr, ...args) {
    let newArr = [];

    arr.forEach(element => {
        if(!args.includes(element)){
            newArr.push(element);
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
