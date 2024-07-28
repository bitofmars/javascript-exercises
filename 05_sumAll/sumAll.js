const sumAll = function(num1, num2){
    let sum = 0;
    let bigger;

    // If any is negative,
    if ((num1 < 0 || num2 < 0) ||
    // Of if any is not an integer
    (!Number.isInteger(num1) || (!Number.isInteger(num2))))
    return "ERROR";
    
    if (num1 > num2){
        bigger = num1;
        lower = num2;
    }else{
        bigger = num2;
        lower = num1;
    }

    while(lower <= bigger){
        sum += lower;
        lower++;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
