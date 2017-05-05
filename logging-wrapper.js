var wrapLog = function (callback, name) {
  return function() {
    var result = callback.apply(null, arguments)
    var args = [...arguments]
    return `${name} (${args})=> ${result}`
  }
}

//-------------------------------------------testing--------------------------
var sum = function () {
  var args = [...arguments]
  return args.reduce(function(a,b){return a+b})
}

var logSum = wrapLog(sum, "sum")

console.log(logSum(5,3,4))  // sum(5,3,4) => 12
console.log(logSum(3,2,0,-1,-2,-2)) // sum(3,2,0,-1,-2,-2) => 0
