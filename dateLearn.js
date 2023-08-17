// js Date object
const d = new Date();
console.log(d);
console.log(new Date("2023-01-21"));
// creates a date object from a date string:
const dateobj = new Date("April 10, 2020 11:10:00");
console.log(dateobj);
console.log(new Date("2022-03-25"));
// new Date(year, month, ...)
console.log(new Date(2021, 11, 24, 10, 33, 30, 0));
console.log(new Date(2018, 15, 24, 10, 33, 30));
console.log(new Date(2018, 11));
console.log(new Date(99, 11, 24));
// mllis
console.log(new Date(100000000000));
console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toUTCString());
console.log(new Date().toISOString());
//iso date prefered format js
const date = new Date("2015-03-25");
console.log(date);
console.log(new Date("2015-03"));
console.log(new Date("2021"));
console.log(new Date("2015-03-25T12:00:00Z"));
console.log(new Date("25 Mar 2015"));
console.log(new Date("January 25 2015"));
// Commas are ignored. Names are case insensitive:
console.log(new Date("JANUARY,21,1999"));
// parce to convert millisecond
let msec = Date.parse("March 21,2012");
console.log(msec);
console.log(new Date(msec));
//
//
// Date Get methods
// get full year
const adate = new Date("2021-03-25");
console.log(adate.getFullYear());
//getmonth
console.log(adate.getMonth());

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[adate.getMonth()]);
console.log(months[new Date().getMonth()]);
// get date
console.log(adate.getDate());
console.log(new Date().getDate());
// getHourse
console.log(adate.getHours());
//getminute
console.log(adate.getMinutes());
//getSeconds
console.log(adate.getSeconds());
//gart milliseconda
console.log(adate.getMilliseconds());
// get day --weak day 0 - sun
console.log(adate.getDay());
console.log(new Date().getDay());
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days[new Date().getDay()]);

// gettime return no of ms sice 1 jan 1970
console.log(adate.getTime());
// date.now() -> no of ms since  ""
console.log(Date.now());

// get UTC date
console.log(adate.getUTCDate());
console.log(new Date().getUTCDate());
// getHourseUTC
console.log(adate.getUTCHours());
//getminute
console.log(adate.getUTCMinutes());
//getSeconds
console.log(adate.getUTCSeconds());
//gart milliseconda
console.log(adate.getUTCMilliseconds());
// get day --weak day 0 - sun
console.log(adate.getUTCDay());
console.log(new Date().getUTCDay());

console.log(days[new Date().getUTCDay()]);

// gettime return no of ms sice 1 jan 1970
console.log(adate.getTime());
// date.now() -> no of ms since  ""
console.log(Date.now());

// setdate

const dt = new Date();
console.log(dt);
// setfullyear
dt.setFullYear(2020);
console.log(dt);
//setFullYear() method can optionally set month and day:
dt.setFullYear(2021, 11, 30);
console.log(dt);
//The setMonth() method sets the month of a date object (0-11):
dt.setMonth(10);
console.log(dt);
//The setDate() method sets the day of a date object (1-31):
dt.setDate(3);
console.log(dt);

//The setDate() method can also be used to add days to a date:
dt.setDate(dt.getDate() + 50);
console.log(dt);

//The setHours() Method
dt.setHours(22);
console.log(dt);

//
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

console.log(text);
