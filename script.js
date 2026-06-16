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
const friends = ["Michael", "Steven", "Peter"];

// This is also a array
const friends1 = new Array(1289, 3429, 3343, 9889);
console.log(friends);
console.log(friends1);
