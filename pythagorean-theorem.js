var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(item) {
  return pythagoreanCalculation(item.x,item.y)
});

// this function calculates z by having x and y from the Pythagorean Theorem (x^2 + y^2 = z^2)
function pythagoreanCalculation(a,b) {
  return Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
}

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
