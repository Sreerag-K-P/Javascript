console.log(Boolean(2 > 1));
console.log(2 > 1);

// switch
let text = "";
switch (new Date().getDay()) {
  case 0:
    text = "sun";
    break;
  case 1:
    text = "mon";
    break;
  case 2:
    text = "tue";
    break;
  case 3:
    text = "wed";
    break;
  case 4:
    text = "turs";
    break;
  case 5:
    text = "fri";
    break;
  case 6:
    text = "sat";
}
console.log(text);

//
const person = { fname: "John", lname: "Doe", age: 25 };

let tex = "";
for (let x in person) {
  tex += person[x];
}
console.log(tex);
//
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
  console.log(text);
}
//
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let t = "";
list: {
  t += cars[0] + "\n";
  t += cars[1] + "\n";
  break list;
  t += cars[2] + "\n";
  t += cars[3] + "\n";
}
console.log(t);
