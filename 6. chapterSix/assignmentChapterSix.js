// ______________________________________________________________

// Assignment: Chapter 6 (Math Expression II)
// ______________________________________________________________


// Q1
// Code a short form of x = x + 1; Use either of the two legal
// expressions

var x = 1;
var y = ++x;
console.log(y);


// Q2
// If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?

var x = 100;
var y = --x;
console.log(y);


// Q3
// var x = 50;
// var y = x++;
// What is the value of y?

var x = 50;
var y = x++;

console.log(y);
// Output: The value of y is 50.

// Q4
// var y = 50;
// var z = --y;
// What is the value of z?

var y = 50;
var z = --y;

console.log(z);
// Output: The value of z is 49.


// Q5
// In a single statement, decrement num and assign its original value
// to newNum.

var num = 30;
var newNum = num--;

console.log(newNum);


// Q6
// In a single statement add 1 to a variable and assign its original
// value to another variable.

var num1 = 30;
var anotherNum = ++num1;

console.log(anotherNum);


// Q7
// Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert

var numberValue = 5;
var newValue = ++numberValue;

alert(newValue);


