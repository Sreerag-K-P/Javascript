// number
let x = 2; //number
let y = 3.24; //number with float
let z = 123e6;
let p = 123e-4;
console.log(x, y, z, p);
console.log(isNaN("5"));
// infilint
let my = 2;
while (my != Infinity) {
  my = my * my;
}
console.log(my);
console.log(typeof Infinity);
console.log(0xff);
let myNumber = 32;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));
// number as object
let n = new Number(123);
let m = 123;
console.log(n);
console.log(n == m);
console.log(n === m);
console.log(typeof n, typeof m);
let o = new Number(123);
console.log(n == o);
console.log(n === o);

console.log(
  Number.parseFloat(10),
  Number.parseFloat("10"),
  Number.parseFloat("10.33"),
  Number.parseFloat("34 45 66"),
  Number.parseFloat("He was 40")
);
console.log(
  Number.parseInt("10", 10),
  Number.parseInt("010"),
  Number.parseInt("10", 8),
  Number.parseInt("0x10"),
  Number.parseInt("10", 16)
);
console.log(
  Number.parseInt("10"),
  Number.parseInt("10.00"),
  Number.parseInt("10.33"),
  Number.parseInt("34 45 66"),
  Number.parseInt(" 60 "),
  Number.parseInt("40 years"),
  Number.parseInt("He was 40")
);
console.log((2.56789).toExponential(3));
console.log((2.56789).toFixed(2));
let mynum = 1000000;
console.log(mynum.toLocaleString());
console.log(mynum.toLocaleString("fi-FI"));
console.log(
  mynum.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
console.log(
  mynum.toLocaleString("en-IN", { style: "currency", currency: "INR" })
);
let num = 13.3714;
console.log(num.toPrecision(5));
console.log(num.toString());
console.log(num.toString(2));
console.log(num.valueOf());
let text = num.constructor;
console.log(text);

// BIG INT
const regularNumber = 9007199254740991;
const biginteger = BigInt(regularNumber);
console.log(biginteger);

const largeNumber = 1234567890123456789012345678901234567890n;
console.log(largeNumber);
console.log(typeof biginteger);
console.log(typeof largeNumber);
//
console.log(
  Number.isSafeInteger(10),
  Number.isSafeInteger(12345678901234567890)
);
//
let b = 9.656;
console.log(b.toExponential(2));
//
// prropertirs
// epsilon
let i = 0.1;
let j = 0.2;
const sum = i + j; //0.30000000000000004
console.log(sum);
console.log(Number.EPSILON);
if (sum - 0.3 < Number.EPSILON) {
  console.log("The sum is approximately equal to 0.3");
} else {
  console.log("The sum is not equal to 0.3");
}
// MAX_VALUE MIN_VALUE
const maxNumber = Number.MAX_VALUE;
console.log(maxNumber);
const minNumber = Number.MIN_VALUE;
console.log(minNumber);
// MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
// MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);
// positive infinty
console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);
// negetive infinty
console.log(Number.NEGATIVE_INFINITY);
console.log(-1 / 0);
// NAN
console.log(Number.NaN);
console.log(100 / "hello");
