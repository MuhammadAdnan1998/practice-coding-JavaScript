// //Q1
// Code the first line of a function displayAlert.

function displayAlert(message) {
    return message
}


// // Q2
// Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.

function askName() {
    let userName = prompt("Enter name");
    return userName;
}


// // Q3
// Code a function that calls 2 other functions.

function functionOne() {
    console.log("Function One is called.");
}

function functionTwo() {
    console.log("Function Two is called.");
}

function callTwoFunctions() {
    functionOne();
    functionTwo();
}


// // Q4
// Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.

function askAndDisplayName() {
    let userName = prompt("Enter name");
    alert("Your name is " + userName);
}

askAndDisplayName();


// //Q5
// Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.

function concat(a, b, c) {
    // You can call the function like this, passing a variable, a string, and a number:
    let variable = "Hello";
}
    concat(variable, "World", 123);    


// //Q6
// Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.

function concatenateStrings(str1, str2) {
    let result = str1 + str2;
    return result;
}



// //Q7
// Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.

function multiplyNumbers(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}


// //Q8
// Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
}


// //Q9
// Write a JavaScript function that takes two parameters and returns
// their sum.

function sumNumbers(num1, num2) {
    return num1 + num2;
}


// //Q10
// Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.

function calculateAverage(numbers) {
    if (numbers.length === 0) 
        return 0; // Handle empty array case
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
}


// //Q11
// You have to capture the returned value from a function and
// store it in a variable?

function addNumbers(a, b) {
    return a + b;
}

let results = addNumbers(5, 10);
console.log(results); // Output: 15


// //Q12
// Write a function which tells letter counts of (word).

function totalLetterCount(word) {
    return word.length; // Return the total number of letters
}

// Example usage:
var result = totalLetterCount("Hello");
console.log(result); // Output: 5


// //Q13
// Write a function to set (year) in date object.

function setYearInDate(year) {
    // Create a new Date object with the current date and time
    var date = new Date();
    // Set the year
    date.setFullYear(year);
    // Return the updated Date object
    return date;
}

// Example usage:
var updatedDate = setYearInDate(2025);
// Output: Date object with the year set to 2025
console.log(updatedDate);


// //Q14
// Write a function which tells the age of a person who Born on
// (dateOfBirth)

function calculateAge(dateOfBirth) {
    var dob = new Date(dateOfBirth); // Convert the input to a Date object
    var today = new Date(); // Get today's date
    
    var age = today.getFullYear() - dob.getFullYear(); // Calculate the difference in years
    
    // Adjust the age if the person hasn't had their birthday this year
    var monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    return age; // Return the calculated age
}

// Example usage:
var age = calculateAge("1998-3-15");
// Output: Age of the person born on the specified date
console.log("Age: " + age);


// //Q15
// Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false

function isWordPresent(word) {
    var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
    // Check if the word is present in the array
    return array.includes(word);
}

// Example usage:
var result = isWordPresent('hassan');
console.log(result); // Output: true

result = isWordPresent('ali');
console.log(result); // Output: false


// //Q16
// Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)

function repeatLetter(letter) {
    return letter.repeat(10); // Repeat the letter 10 times
}

// Example usage:
var result = repeatLetter('a');
console.log(result); // Output: "aaaaaaaaaa"


// //Q17
// write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()

function reverseArray() {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    // Reverse the array
    return arr.reverse();
}

// Example usage:
var result = reverseArray();
console.log(result); // Output: ['e', 'd', 'c', 'b', 'a']
