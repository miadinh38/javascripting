const sumLargestNumbers = function(data) {

  if (data.length < 2) {
    console.log("The array must contain at least two numbers.");
  }

  var largest = -Infinity;
  var secondLargest = -Infinity;

  for (var i = 0; i < data.length; i++) {
    var currentNumber = data[i];

    if (currentNumber > largest) {
     secondLargest = largest;
     largest = currentNumber;
    } else if (currentNumber > secondLargest) {
     secondLargest = currentNumber;
    }
  }

  return largest + secondLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));