"use strict";
// learned about strict mode that is helping  to find bug that can javascript engine silently ignore ,like normally I can write isDriverLicense = true; although I did not add any variable in this case javascript engine will not give eny error , but if i use strick mode javaScript engine will give error that isDriverLicense is not defined that is actually right:
// interface is reserved word in js
// private is reserved word in js

// Function
function logger() {
  //   console.log("My name is Aminul");
}

// calling / running / invoking function
logger();

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
const calcAge = (birthYear) => 2026 - birthYear;
const age3 = calcAge(2003);
// console.log(age3); output: 23;

const yearRetirement = (birthYears, firstName) => {
  const age = 2036 - birthYears;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};
// console.log(yearRetirement(2003, "Aminul"));
