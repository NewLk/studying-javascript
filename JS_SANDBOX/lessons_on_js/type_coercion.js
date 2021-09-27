// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

let a = 7;
let b = 3;
let sum = a + b;

console.log(sum);
console.log(typeof sum);

a = String(7);
sum = a + b;

console.log(sum);
console.log(typeof sum);