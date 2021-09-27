// var, let, const

// multi word vars
var fitstName = "Jhon"; // Camel case
var first_name = "Sara"; // Underscore
var FirstName = "Tom"; // Pascal case
var firstname = "Maike"; // Not a convension

// you can not initialize a const variable:
// const random;

// const objects can be mutated, but can NEVER be reassigned:

const person = {
  name: "Adagoberto",
  age: 97
}

person.age = 100

console.log(person);

// person = {
//   height: 6
// }

// the same goes for arrays:

const numbers = [1, 2, 3, 4, 5]

numbers.push(6);

console.log(numbers);

// numbers = [6]