//implementing the map function that takes an array and a callback function and returns an array
function map(arr,cb) {
  var result = []
  for(var i=0 ; i < arr.length ; i++) {
    result.push(cb(arr[i]))
  }
  return result
}

//-------------------------------------------------------testing----------------------------------------
var words = ["ground", "control", "to", "major", "tom"];

var test = map(words, function(word) {
  return word.length;
});

console.log(test);
