// PRIMITIVE DATA TYPES

// String
const fullName = "John Doe";
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
var test;
// Symbol
var sym = Symbol();

// REFERENCE DATA TYPES - (these are going all come back as 'objects')

// Arrays
const hobbies = ['Movies', 'Music'];

// Object literals
const address = { city: "Boston", state: "MA" };

// Dates
const today = new Date();

// Assign the variable you want to know the type of to the variable bellow
let checkThisVar = today;

if (checkThisVar == null) {
  console.log(
    "this is the type of the variabled tested: " + typeof checkThisVar
  );
  console.warn(
    "In JavaScript, typeof null is 'object', which incorrectly suggests that null is an object. it isn't, it's a primitive value. This is a bug and one that unfortunately can't be fixed, because it would break existing code."
  );
  console.warn(
    "Aparently, if you initialize a variable but don't assign a value to it, as it is true for the value 'test' in this document, its type is considered 'undefined', but its value is considered null. This conclusion was drwan by me after I checked two varibles inside an 'if' statement, one of type undefined and another of type null, and both of them were considered to have a null value. Although, I couldn't get either of their values printed on the log, probably because they don't exist (they're null values)"
  );
} else {
  console.log(
    "this is the type of the variabled tested: " + typeof checkThisVar
  );
}

console.log(
  "this is the value inside the variabled tested: " + checkThisVar.toString()
);
