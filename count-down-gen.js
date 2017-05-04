//this function takes in a number x and returns a function that counts down when it is called
var countdownGenerator = function (x) {
  var numberOfTimesLeft = x
  return function () {
    numberOfTimesLeft -= 1
    if (numberOfTimesLeft == 0) {return 'blast Off!'}
    else if (numberOfTimesLeft < 0) { return 'Rockets already gone, bub!'}
    else { return `${numberOfTimesLeft} time(s) left` }
  }
};

//-----------------------------------------------testing-----------------------------------------
var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // ..
console.log(countdown()); // ...
console.log(countdown()); //
console.log(countdown()); //
