const args = process.argv;
console.log(args.slice(2));

let x = Number(args[2]);
let y = Number(args[3]);

let sum = function() {
  return x + y;
};
console.log(sum());


//Another solution
/*Code should handle the case where the user doesn't provide two arguments,
or where the arguments can't be converted to numbers*/

if (args.length < 4) {
 console.error("Please provide two numbers as arguements.");
 process.exit(1);
}

let a = Number(args[2]);
let b = Number(args[3]);

if (isNaN(a) || isNaN(b)) {
    console.error("Both arguements must be valid numbers.");
    process.exit(1);
}

let sum = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
console.log(sum(a,b));