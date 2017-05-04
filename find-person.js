// The second argument/parameter is expected to be a function
function findPerson(arr, name, found) {
  arr.forEach(function(elm , index) {
    if (elm == name) {
        found(name,index)
        return;
    }
  })
}

// this function is passed as a callback to findPerson function
function actionWhenFound(name,i) {
  console.log("found %s at index %s", name, i);;
}

//------------------------------------test----------------------------------------
findPerson(["Alice", "Bob", "Waldo", "Winston"], "Waldo", actionWhenFound);
findPerson(["Alice", "Bob", "Waldo", "Winston"], "Alice", actionWhenFound);
findPerson(["Alice", "Bob", "Waldo", "Winston"], "Bob", actionWhenFound);
