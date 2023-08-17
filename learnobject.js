// create objects 4 ways

const e = require("express");

// 1 using object literel easyest way
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person);

const students = {}; //emply first
students.firstname = "lalu";
students.lastNames = "pp";
students.eyeColor = "red";
console.log(students);
// 2 using new keyword
const employ = new Object();
employ.firstname = "prakashan";
employ.lastNames = "pp";
employ.eyeColor = "red";
console.log(employ);

const x = person;
console.log(x.firstName);
x.firstName = "antony";
console.log(person);
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);
// add property
person.nationality = "Indian";
console.log(person);
// delete property
delete person.age;
console.log(person);
delete person["eyeColor"];
console.log(person);

// nested Object
const myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
//You can access nested objects using the dot notation or the bracket notation:
console.log(myObj.cars.car1);
console.log(myObj["cars"].car1);
console.log(myObj["cars"]["car1"]);
// nexted arrays and object
const myObject = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
//To access arrays inside arrays, use a for-in loop for each array:
let a = "";
for (let i in myObject.cars) {
  a += myObject.cars[i].name + " ";
  for (let j in myObject.cars[i].models) {
    a += myObject.cars[i].models[j] + "\n";
  }
}
console.log(a);
// js Object Method
const user = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(user);
console.log(user.fullName());
// adding a method to an object
user.name = function () {
  return this.firstName + " " + this.lastName;
};
console.log(user);
let name = user.name();
console.log(name);
// getter

const people = {
  fname: "samual",
  lname: "jhon",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
};
console.log(people.lang);
//Setter
const player = {
  fname: "samual",
  lname: "jhon",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};
player.lang = "malayalam";
console.log(player);

// Object.defineProperty()

const countObj = { counter: 0 };
Object.defineProperty(countObj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(countObj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(countObj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(countObj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(countObj, "sub", {
  set: function (value) {
    this.counter -= value;
  },
});
countObj.add = 5;
countObj.sub = 1;
countObj.decrement;
countObj.increment;
countObj.reset;
console.log(countObj);
//
// iterate to take seaquence of data from a object
const myNumbers = {};

myNumbers[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

let texts = "";
for (const x of myNumbers) {
  texts += x + "\n";
}
console.log(texts);
// set
// create a set

const letters = new Set(["a", "b", "c"]);
console.log(letters);
// another way
const Letters = new Set();
// add values to set
Letters.add("a");
Letters.add("b");
Letters.add("c");
// If you add equal elements, only the first will be saved:
Letters.add("a");
Letters.add("a");
Letters.add("c");
Letters.add("c");
Letters.add("a");
console.log(Letters);
// ForEachMethod

let Text = "";
Letters.forEach((value) => {
  Text += value;
});
console.log(Text);

// values metod returns itorater so
let MyIterator = Letters.values();

let Result = "";
for (const entry of MyIterator) {
  Result += entry;
}
console.log("Result:", Result);

// map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()
const Fruits = new Map([
  ["apple", 500],
  ["mango", 300],
  ["orenge", 400],
]);
console.log(Fruits); // { 'apple' => 500, 'mango' => 300, 'orenge' => 400 }
//You can add elements to a Map with the set() method:
const Fruitz = new Map();
Fruitz.set("apple", 500);
Fruitz.set("grapes", 700);
Fruitz.set("kiwi", 200);
console.log(Fruitz);
//The set() method can also be used to change existing Map values:
Fruitz.set("kiwi", 1000);
console.log(Fruitz);
// The get() method gets the value of a key in a Map:
const val = Fruitz.get("apple");
console.log(val);
//The size property returns the number of elements in a Map:
console.log(Fruitz.size);
//The delete() method removes a Map element:
Fruitz.delete("apple");
console.log(Fruitz);
// The clear() method removes all the elements from a Map:
Fruitz.clear();
console.log(Fruitz);
//The has() method returns true if a key exists in a Map:
const exist = Fruitz.has("kiwi");
console.log(exist);
// maps are objects
console.log(typeof Fruitz);
console.log(Fruitz instanceof Map);
//foreach in map
let t = "";
Fruits.forEach(function (value, key) {
  t += key + " = " + value + "\n";
});
console.log(t);

// ___ Changing a property value_____
const charector = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};
// change prperty value
Object.defineProperty(charector, "language", { value: "NO" });
console.log(charector);
//get own property names
let propertiesNames = Object.getOwnPropertyNames(charector);
console.log(propertiesNames);
// Add a property
Object.defineProperty(charector, "year", { value: "2008" });
console.log(charector.year);
// The Object.defineProperty() method can also be used to add Getters and Setters:
Object.defineProperty(charector, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});

console.log(charector.fullName);
