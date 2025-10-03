/*
    Imagin that code start from here *







*/
// hoisting examples
// console.log(hoistedVarNumber); // undefined
var hoistedVarNumber = 5;

// console.log(sayWelcome()); // welcome
function sayWelcome() {
  return "Welcome";
}

// console.log(hoistedLetNumber); // unaccessed
let hoistedLetNumber = 10; // const variable is the same behavior

// type casting
console.log(6 - "d"); // NaN

// builtin functions to check types
console.log(isFinite("23")); // check that this is a valid number , without any chars or string
console.log(isNaN("23a")); // check that this is not a number
