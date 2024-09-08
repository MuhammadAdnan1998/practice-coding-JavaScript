// ______________________________________________________________

// Assignment: Chapter 11  (Comparison Operators)
// ______________________________________________________________


// Q1
// Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)

// var a = +prompt("Enter value of a :")
// var b = +prompt("Enter value of b :")
// if(a!=b){
//     console.log("a is not euqal to b")
// }
// else{
//     console.log("a is euqal to b")
// }

// // Q2
// Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.

// var c = +prompt("Enter value of c :")
// var d = +prompt("Enter value of d :")
// if(c>=d){
//     console.log("c is greater than or equal to b")
// }
// else{
//     console.log("c is not greater than or equal to b")
// }

// // Q3
// Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable

// var e = +prompt("Enter value of e :");
// if (e != 5) {
//    e = 5;
//   console.log(
//     "variable is unequal to a particular number, assign a number to that variable: ",
//     e
//   );
// } else {
//   console.log("variable is equal to a particular number");
// }

// // Q4
// Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.

// var variable_e = +prompt("Enter value of variable e :");
// if (variable_e == 5) {
//   alert("Congratulations");
// } else {
//   alert("Not equal");
// }


// // Q4
// Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match

var firstName = prompt("Enter your First Name: ");
var anotherName = prompt("Enter Another Name: ");
if(firstName != anotherName){
    alert("No match");
}
else{
    alert("Match")
}
