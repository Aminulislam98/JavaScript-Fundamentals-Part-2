"use strict";
// learned about strict mode that is helping  to find bug that can javascript engine silently ignore ,like normally I can write isDriverLicense = true; although I did not add any variable in this case javascript engine will not give eny error , but if i use strick mode javaScript engine will give error that isDriverLicense is not defined that is actually right:
// interface is reserved word in js
// private is reserved word in js

// Function
// function logger() {
//   console.log("My name is Aminul");
// }

// calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
//  console.log(fruitProcessor(5, 2));
// const num = Number("22");

//  function expression and declaration
// function age() {
//    console.log("this is function declaration");
// }
// const age = function () {
//    console.log("this is function expression");
// };

// Arrow function
// const calcAge = (birthYear) => 2026 - birthYear;
// const age3 = calcAge(2003);
// console.log(age3); output: 23;

// const yearRetirement = (birthYears, firstName) => {
//   const age = 2036 - birthYears;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };
// console.log(yearRetirement(2003, "Aminul"));

// Function calling another function

// const cutFruitPieces = (fruit) => {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(5, 2));

// Reviewing function

// const age = (birthYears) => 2026 - birthYears;

// const yearRetirement = (birthYears, firstName) => {
//   const calcAge = age(birthYears);
//   const retirement = 65 - calcAge;
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement}`;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };
// console.log(yearRetirement(1920, "Aminul"));
// const calcAverage = (firstScore, secondScore, thirdScore) => {
//   return (firstScore + secondScore + thirdScore) / 3;
// };
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas > avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return "No team wins...";
//   }
// }
// console.log(checkWinner(scoreKoalas, scoreDolphins));
// Introduction to Arrays
// const friends = ["Michael", "Steven", "Peter"];

// This is also a array
// const friends1 = new Array(1289, 3429, 3343, 9889);
// console.log(friends);
// console.log(friends1);

//Array is 0 index based and length is not 0 index based

const friends = ["Michael", "Steven", "Peter"];
friends[2] = "Sarah";
// console.log(friends);

//Basic array operation
const friends1 = ["Microbe", "Steadfast", "Package"];
friends.push("Aminul"); // adding element to the array
// .push is also a function / method
// this is also called mutating

friends1.unshift("Hey");
// console.log(friends1);
// Push method add element end of the array but unshift method add element at the very first of the array

// Remove element
const popped = friends1.pop(); // pop return the removed element
// console.log(friends1);
// console.log(popped);
friends1.shift(); // unshift method removed the element from at the first and it also return the removed element
//console.log(friends1.indexOf("microbe")); indexOf method return the position of the element

//console.log(friends1.includes("Microbe"));  includes method only return Boolean : true or false || it is strict equality

// Introduction to array

// Dot vs. Bracket Notation
const user = {
  firstName: "Aminul",
  lastName: "Islam",
  age: 2026 - 2003,
  job: "Developer",
  friends: ["Microbe", "Steadfast", "Package"],
};

const findKeyInObject = "job";

// console.log(user[findKeyInObject]);
// const interestedIn = prompt(
//   "What do you want to know about Aminul? Chose between firstName, lastName, age, job, and friends",
// );
// console.log(user[interestedIn]);
// inside bracket notation any expression can put

// Object Methods
const user1 = {
  firstName: "Aminul",
  lastName: "Islam",
  birthYear: 2003,
  job: "Developer",
  friends: ["Microbe", "Steadfast", "Package"],
  hasDriverLicense: true,
  // calcAge: function () {
  //   return 2026 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return (this.getSummary = `${this.firstName} is ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`);
  },
};

// I learned about this keyword that is pointing to the object that is calling the method, in this case user1 object is calling the method so this keyword is pointing to user1 object
// I learned about method chaining that is calling method inside another method, in this case I can call calcAge method inside the console.log() method
// console.log(user1.getSummary());

//
// Done exercise on udemy course website

// Iteration: The for Loop;
// For loop keeps running while condition is TRUE;
// const repetitions = 20;
// for (let rep = 1; rep <= repetitions; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
//   if (rep === repetitions)
//     console.log(`I have done ${repetitions} repetitions 🏋️‍♂️`);
// }
// I have practiced for loop and learned about how to use it and how to control the loop with condition and how to use break and continue statement in the loop

// Looping Arrays, Breaking and Continuing
const user2 = [
  "aminul",
  "islam",
  2026 - 2003,
  "developer",
  ["microbe", "steadfast", "package"],
  true,
];
const types = [];
for (let i = 0; i < user2.length; i++) {
  // console.log(user2[i], typeof user2[i]);
  // filling types array with the type of each element in user2 array
  // types[i] = typeof user2[i];
  types.push(typeof user2[i]);
}

const years = [1991, 2007, 1969, 2020];
let age = [];
for (let i = 0; i < years.length; i++) {
  age.push(2026 - years[i]);
}

// continue and break statement

for (let i = 0; i < user2.length; i++) {
  if (typeof user2[i] !== "string") continue;
  // console.log(user2[i], typeof user2[i]);
}

for (let i = 0; i < user2.length; i++) {
  if (typeof user2[i] === "number") break;
  // console.log(user2[i], typeof user2[i]);
}

// Looping Backwards and Loops in Loops

const user3 = [
  "aminul",
  "islam",
  2026 - 2003,
  "developer",
  ["microbe", "steadfast", "package"],
  true,
];

for (let i = user3.length - 1; i >= 0; i--) {
  console.log(user3[i]);
}

// Loops in loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Exercise ${exercise} -------`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}
