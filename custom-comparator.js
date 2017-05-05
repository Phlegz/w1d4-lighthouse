var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function comparator(obj) {
  students.sort(function(a, b){
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1
      else if (nameA > nameB)
          return 1
      // comparing the ages if the names are the same
      else {
        return (a.age < b.age) ? 1 : -1
      }
  })
  return students
}

console.log(comparator(students));
