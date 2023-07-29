const instructorWithLongestName = function(instructors) {
  if (instructors.length === 0) {
    return null;
  }

  let longestNameIndex = 0;
  let longestNameLength = instructors[0].name.length;

  for (let i = 1; i < instructors.length; i++) {
    const currentNameLength = instructors[i].name.length;

    if (currentNameLength > longestNameLength) {
      longestNameLength = currentNameLength;
      longestNameIndex = i;
    }
  }

  return instructors[longestNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));