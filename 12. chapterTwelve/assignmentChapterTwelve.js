// ______________________________________________________________

// Assignment: Chapter 12  (if…else and else if statements)
// ______________________________________________________________

// // Q1
// Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.

// var variable_first = +prompt("Enter first number: ");
// var variable_second = +prompt("Enter second number: ");
// if (variable_first >= variable_second) {
//   alert("first variable is greater than or equal to second variable");
// } else {
//   alert("first variable is not greater than or equal to second variable");
// }

// // Q2
// Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)

// var englishMarks = +prompt("Enter obtained marks in English: ");
// var urduMarks = +prompt("Enter obtained marks in Urdu: ");
// var mathsMarks = +prompt("Enter obtained marks in Maths: ");
// var scienceMarks = +prompt("Enter obtained marks in Science: ");
// var islamiyatMarks = +prompt("Enter obtained marks in Islamiyat: ");

// totalMarks =
//   englishMarks + urduMarks + mathsMarks + scienceMarks + islamiyatMarks;
// percentage = totalMarks / 100;
// if (percentage >= 80) {
//   alert("You have secure Grade A.");
// } else if (percentage >= 70 && percentage < 80) {
//   alert("You have secure Grade B.");
// } else if (percentage >= 60 && percentage < 70) {
//   alert("You have secure Grade C.");
// } else if (percentage >= 50 && percentage < 60) {
//   alert("You have secure Grade D.");
// } else {
//   alert("Fail");
// }

// // Q3
// This is the if statement that begins the code.
// if (a === 10) {
//  alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself

// var a = +prompt("Enter a number: ");
// if (a === 10) {
//   alert("a is 10");
// } else {
//   alert("The correct value of a is: " + a);
// }

// // Q4
// Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.

var cityName = prompt("Enter a city : ");
if (cityName == "karachi") {
  alert("Acknowledging it's karachi");
} else if (cityName == "lahore") {
  alert("Acknowledging it's Lahore.");
} else {
  alert("Neither karachi nor lahore");
}
