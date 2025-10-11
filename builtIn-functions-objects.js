/*
    Imagin that code start from here *







*/
//** */ hoisting examples
// console.log(hoistedVarNumber); // undefined
// var hoistedVarNumber = 5;

// console.log(sayWelcome()); // welcome
// function sayWelcome() {
//   return "Welcome";
// }

// console.log(hoistedLetNumber); // unaccessed
// let hoistedLetNumber = 10; // const variable is the same behavior

// type casting
// console.log(6 - "d"); // NaN

// ** builtin functions to check types
// console.log(isFinite("23")); // check that this is a valid number , without any chars or string
// console.log(isNaN("23a")); // check that this is not a number

//** built-in objects */
// array and refrence types

// let valueArray = [1, 2, 3, 4, 5];
// let refrenceArray = new Array(1, 2, 3, 4, 5, "string");

// console.log(typeof valueArray);
// console.log(typeof refrenceArray);

// valueArray = refrenceArray;
// console.log(valueArray.length);

//note ** array is always ref type in JS and there is'n a way to create a value type array

// array methods
let firstArray = ["A", "L", "T", "A", "Y", "E", "B"];
let secondeArray = ["A", "L", "T", "A", "Y", "E", "B"];
let names = ["AlTayeb", "Ahmed", "Hassan"];
let grads = ["A", "B", "C"];
let associativeArray = [];
// let resultArray = Array(firstArray.concat(secondeArray).join(""));
// resultArray.push("test", "test");
// console.log(resultArray.push("test", "test"));
// console.log(resultArray);
// console.log(resultArray.shift());
// console.log(resultArray);
// console.log(resultArray.unshift("AlTayeb"));
// console.log(resultArray);
// console.log(resultArray.slice("1", 2));
// console.log(resultArray);

// for (let counter = 0; counter < names.length; counter++) {
//   associativeArray[names[counter]] = grads[counter];
// }

// for (let key of associativeArray) {
//   console.log(key);
//   // console.log(associativeArray[key]);
// }
/* Dates */
let currentDate = new Date();

// console.log(currentDate);
// console.log(currentDate.toISOString());
// console.log(currentDate.toUTCString());
// console.log("***************************************");

// console.log(currentDate.toLocaleString());
// console.log("***************************************");
// console.log(currentDate.toLocaleDateString());
// console.log("***************************************");
// console.log(currentDate.toLocaleTimeString());
// console.log("***************************************");

// if (currentDate.toLocaleTimeString().includes("PM"))
//   console.log("We are at nigt");

// console.log("***************************************");
// console.log(currentDate.toString());
// console.log("***************************************");
// console.log(currentDate.toDateString());
// console.log(currentDate.toTimeString());

// set a new value for a date var and formatin it using Intl object with DateTimeFormat(local , options) method
// currentDate.setFullYear(2001, 2, 1);

// let options = {
//   year: "numeric",
//   month: "numeric",
//   day: "numeric",
// };

// let cusomteFormatedDate = new Intl.DateTimeFormat("en-GB", options).format(
//   currentDate
// );

// console.log(cusomteFormatedDate);
