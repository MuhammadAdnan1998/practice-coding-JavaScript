// ______________________________________________________________

// Assignment: Chapter 28,29 (Converting Strings)
// ______________________________________________________________

// // Q1
// How do you convert a string to an integer in JavaScript?

// var a = "10.13";
// var b =  +a;
// console.log("Type of a after conversion: "+ typeof Number (a))
// console.log("Value of a is: ", a)

// // Q2
// Write a JavaScript function to convert the string "123" to an
// integer.

// var a = "365";
// console.log("Type of a before conversion: " + typeof a);
// console.log("Type of a after conversion: " + typeof parseInt(a));
// console.log("Value of a is: ",a)

// // Q3
// How can you convert a string containing a decimal number to a floating-point number in JavaScript?

// var a = "365.00";
// console.log("Type of a before conversion: " + typeof a);
// console.log("Type of a after conversion: " + typeof parseFloat(a));
// console.log("Value of a is: ",a)

// // Q4
// How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?

// var a = "365";
// console.log("Type of a before conversion: " + typeof a);
// console.log("Type of a after conversion: " + typeof parseInt(a));
// The parseInt() function commences from the first position of the string, checking if the character there is convertible into a number. If not, the function returns NaN, irrespective of any subsequent numerical characters within the string.

// // Q5
// How can you convert a number to a string in JavaScript?

// var a = 365;
// console.log("Type of a before conversion: " + typeof a);
// console.log("Type of a after conversion: " + typeof toString(a));
// console.log("Value of a is: ", a);

// // Q6
// Write a JavaScript function to convert the number 42 to a string.

// var a = 42;
// console.log("Type of a before conversion: " + typeof a);
// console.log("Type of a after conversion: " + typeof toString(a));
// console.log("Value of a is: ", a);

// // Q7
// Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?

// var a = "3.14";
// console.log("Type of a before conversion: " + typeof a);
// console.log("Type of a after conversion: " + typeof parseInt(a));
// console.log("Value of a is: ", parseInt(a));