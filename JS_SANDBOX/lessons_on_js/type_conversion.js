let val;

// number to String
val = String(5);
val = (5).toString();

// boolean to String
val = String(false);
val = (false).toString();

// date to String
val = String(new Date());
val = (new Date()).toString();

// array to String
val = String([1, 2, 3]);
val = ([1, 2, 3]).toString();

// String to number
val = Number('5.5');
val = parseInt('5.5');
val = parseFloat('5.5');

// Boolean to number
val = Number(true);

// Null to number
val = Number(null);

// String (Not a number) to number
val = Number('Hello');

// Array to number
val = Number([1, 2, 3]);

// Output

console.log(val);
console.log(typeof val);
console.log(val.length); // length is a String property, therefore, it only works with Strings.
console.log(val.toFixed()); // fixed method only works with numbers.