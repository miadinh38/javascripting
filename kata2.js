const conditionalSum = function(values, condition) {
  function isEven(x) {
    if (x % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

  function sumOfArray(array) {
    let sum = 0;
    for (i=0; i<array.length; i++) {
      sum += array [i];
    }
    return sum;
  }

  let conditionalArray = [];
  for (i=0; i < values.length; i++) {
    if (isEven(values[i]) === condition) {
      conditionalArray.push(values[i]);
    }
  }
  return sumOfArray(conditionalArray); 
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));