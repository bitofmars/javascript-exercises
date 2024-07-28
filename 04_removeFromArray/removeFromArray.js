/* My original solution, but it failed one test.

const removeFromArray = function(array, ...args) {
    for (let arg of args){
        let index = array.indexOf(arg);
        if (index !== -1){
            array.splice(index, 1);
        }
    }
    return array;
}; */

// The actual solution, that's easier

const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;