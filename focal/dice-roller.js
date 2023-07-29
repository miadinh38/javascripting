const number = process.argv[2];
let result = "";

const diceRoller = function(nums) {
  for (let i = 0; i < nums; i++) {
    result += Math.floor(Math.random() * 6 + 1);
  }
  return Array.prototype.join.call(result, ", ");
};

console.log(`Rolled ${number} dice: ${diceRoller(number)}`);