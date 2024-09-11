// ______________________________________________________________

// Assignment: Chapter 21 (Changing Case)
// ______________________________________________________________

// // Q1
// Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

// userInput = "Muhammad Adnan";
// var allLower = userInput.toLowerCase();
// console.log(allLower)

// // Q2
// Convert the string represented by x to lower-case and assign the
// result to the same variable.

// var x = "ABCD";
// var x = x.toLowerCase();
// console.log(x);

// // Q3
// Convert the string represented by y to upper-case and assign the
// result to the same variable.

// var y = "abcdefgh";
// var y = y.toUpperCase();
// console.log(y);

// // Q4
// Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

// var a = "ABCD";
// var b = a.toLowerCase();
// console.log(b);

// // Q5
// Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.

var array1 = ["A", "B", "C", "D"];
for (var i = 0; i < array1.length; i++) {
    var array2 = array1.toLowerCase()
    console.log(array2);
}



// // Q6
// Display in an alert the upper-case version of the string
// represented by a variable.

// var a = "abcd";
// var b = a.toUpperCase();
// console.log(b);

// // Q7
// var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

// var cityName = "kaRacHi";
// var firstLetter = cityName.slice(0, 1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetters = cityName.slice(1);
// otherLetters = otherLetters.toLowerCase();
// var cityName = firstLetter + otherLetters;
// console.log(cityName);
