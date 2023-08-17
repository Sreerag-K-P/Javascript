//cal back

function display(param) {
  console.log(param);
}

function add(a, b) {
  sum = a + b;
  display(sum);
}
add(5, 4);

// HOF

// Example 1: Higher-order function accepting a function as an argument

// This higher-order function takes two numbers and a function
function operate(a, b, operation) {
  return operation(a, b); // Call the provided operation function
}

// A function that adds two numbers
function mul(x, y) {
  return x * y;
}

const res = operate(3, 4, mul);
console.log(res);

// Example 2: Higher-order function returning a function

// This higher-order function returns a function
function multiplier(factor) {
  // The returned function multiplies a number by the given factor
  return function (number) {
    return number * factor;
  };
}

// Create a function that multiplies by 2
const double = multiplier(2);
const neg = multiplier(-1);
// Use the returned function to double a number

const doubledValue = double(5);
console.log("Doubled value:", doubledValue); // Output: Doubled value: 10
const negetive = neg(5);
console.log("negetive value:", negetive); // Output: -5

// asyncronous

function printMe() {
  console.log("Print Me");
}
function test() {
  console.log("Test");
}

setTimeout(printMe, 2000); //print after 2 sec
test();

//  here test will be exicuted ahead of  primt me becouse
// set Time out is a webapi means js will do it as asycrounusly
// that means all suncrounse function will exicute first then
// asycronus fuction exicute
