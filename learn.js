const arr = [1, 2, 3, 4, 5, "abc", "def"];
arr.push("sreerag", { a: "hai", b: "hellow" });
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("hellow", "sreerag");
console.log(arr);

let obj = {
  students: [
    {
      name: "sreerag",
      age: 24,
      gender: "male",
    },
    {
      name: "jhon",
      age: 20,
      gender: "male",
    },
    {
      name: "julya",
      age: 23,
      gender: "female",
    },
    {
      name: "ben",
      age: 22,
      gender: "male",
    },
    {
      name: "leo",
      age: 22,
      gender: "male",
    },
  ],
};

// console.log(obj[1].age);
// console.log(obj[4]);
obj.students.push({ name: "drogi", age: 23, gender: "female" });
obj.students.splice(
  4,
  0,
  {
    name: "messi",
    age: 23,
    gender: "male",
    profesion: "football",
  },
  { name: "samson", age: 23, gender: "male" }
);
console.log(obj);
obj.students.splice(2, 1);
console.log(obj);
obj.students[0].age = 1;
obj.students[1].age = 10;
obj.students[2].age = 20;
obj.students[3].age = 30;
obj.students[4].age = 40;
obj.students[5].age = 50;
obj.students[6].age = 54;
console.log(obj);
const retArray = obj.students.filter((student) => student.age > 30);
console.log(retArray);
const ind = retArray.findIndex((student) => student.age == 50);
console.log(ind);
const data = obj.students.find((student) => student.name == "jhon");
console.log(data);

const users = [
  {
    name: "rakesh",
    age: 34,
    contact: {
      phone: 99902823390,
      email: "rakesh@gmail.com",
      address: {
        state: "kerala",
        country: "India",
      },
    },
  },
  {
    name: "ramya",
    age: 37,
    contact: {
      phone: 1234567890,
      email: "ramya@gmail.com",
      address: {
        state: "delhi",
        country: "India",
      },
    },
  },
  {
    name: "shinto",
    age: 40,
    contact: {
      phone: 1234567890,
      email: "shinto@gmail.com",
      address: {
        state: "Delhi",
        country: "India",
      },
    },
  },
];

const value = users
  .filter((user) => user.name == "rakesh")
  .map((add) => add.contact.address);
// const value = users[0].contact.address;
console.log(value);

const Delhipeople = users.filter(
  (user) => user.contact.address.state.toLowerCase() == "delhi"
);
console.log(Delhipeople);

const part = Delhipeople.slice(1, 2);
console.log(part);
const films = ["spiderman", "batman", "superman"];

const newArr = users.concat(films);
console.log(newArr);

const numbers = [1, 2, 3, 4, 5, 6, 7, 9];
const double = numbers.map((number, index) => {
  return number * 2;
  console.log(`index: ${index} : ${number * 2}`);
});
console.log(double);
