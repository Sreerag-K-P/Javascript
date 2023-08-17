// Math
console.log(Math.PI);
//JavaScript provides 8 mathematical constants that can be accessed as Math properties:
console.log(Math.E); // returns Euler's number
Math.PI; // returns PI
console.log(Math.SQRT2); // returns the square root of 2
console.log(Math.SQRT1_2); // returns the square root of 1/2
console.log(Math.LN2); // returns the natural logarithm of 2
console.log(Math.LN10); // returns the natural logarithm of 10
console.log(Math.LOG2E); // returns base 2 logarithm of E
console.log(Math.LOG10E); // returns base 10 logarithm of E

// Math.round() returns the nearest integer:
console.log(Math.round(5.4));
console.log(Math.round(5.5));
console.log(Math.round(5.9));
console.log(Math.round(5.48));
//Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(5.2));
console.log(Math.ceil(7.5));
console.log(Math.ceil(7.9));
console.log(Math.ceil(-7.5));
//Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.9));
console.log(Math.floor(-4.9));
console.log(Math.floor(4.1));
//Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(3.2));
console.log(Math.trunc(3.5));
console.log(Math.trunc(3.6));
console.log(Math.trunc(3.1));
console.log(Math.trunc(3.9));
console.log(Math.trunc(-3.9));
//Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(4)); //1
console.log(Math.sign(0)); //0
console.log(Math.sign(-5)); //-1
//Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(8, 2));
//Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64));
//Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7)); //4.7
// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.
console.log(Math.cos((0 * Math.PI) / 180)); // 1

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

const minmm = Math.min(120, 30, 50, 3.5, -300);
console.log(minmm);
const maxmm = Math.max(120, 30, 50, 3.5, -300);
console.log(maxmm);

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
let random = Math.random();
console.log(random);
//Math.log(x) returns the natural logarithm of x.
console.log(Math.log(1));
//Math.log2(x) returns the base 2 logarithm of x.
console.log(Math.log2(8));
//randome
// Returns a random integer from 0 to 9:
const integer = Math.floor(Math.random() * 10);
console.log(integer);
