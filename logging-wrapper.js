var wrapLog = function (callback, name) {
  return function() {
    var result = callback.apply(null, arguments)
    var args = [...arguments]
    return `${name}(${args[0]},${args[1]}) => ${result}`
  }
}

//-------------------------------------------testing--------------------------
var sum = function (a,b) { return a + b  }
var logSum = wrapLog(sum, "sum")

console.log(logSum(5,3))  // sum(5,3) => 8
console.log(logSum(3,2)) // sum(3,2) => 5
