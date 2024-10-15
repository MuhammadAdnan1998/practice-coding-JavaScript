// //Q1
// Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand

var dObj = new Date();
console.log(dObj);


// // Q2
// Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.

var dObj = new Date();
var dStr = dObj.toString();
console.log(dStr);


// // Q3
// Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.

var d = new Date();
var day = d.getDay();
console.log(day);

// // Q4
// The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

var d = new Date();
var day = d.getDay();

var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var currentDay = dayNames[day];
console.log(currentDay);


// //Q5
// Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.

var currentDate = new Date();
console.log(currentDate);
var date = currentDate.getDate();
console.log('Date =>',date);
var months = currentDate.getMonth();
console.log('Month =>',months);
var currentDay = currentDate.getDay();
console.log('Day =>',currentDay);
var hours = currentDate.getHours();
console.log('Hours =>',hours);
var minutes = currentDate.getMinutes();
console.log('Min =>',minutes);
var seconds = currentDate.getSeconds();
console.log('Sec =>',seconds);
var milliSeconds = currentDate.getMilliseconds();
console.log('Milli =>',milliSeconds);
var time = currentDate.getTime();
console.log('Time =>',time);


// //Q6
// Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.

let later = new Date(2020, 11, 31);
console.log(later);


// //Q7
// Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.

let date = new Date(1992, 1, 2);
console.log(date);


// //Q8
// Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.

alert(new Date(1980, 0, 1).getTime());


// //Q9
// How do you change the year of a date in JavaScript?

// Create a new date object with the current date and time
let date = new Date();
// Change the year to 2025
date.setFullYear(2025);


// //Q10
// Write a JavaScript function to change the month of a given
// date to January.

function changeMonthToJanuary(date) {
    // Create a new Date object based on the provided date
    let newDate = new Date(date);
    // Set the month to January (0 is January)
    newDate.setMonth(0); 
    return newDate; // Return the updated date
}

// Example usage:
let originalDate = new Date(2024, 9, 15); // October 15, 2024
let updatedDate = changeMonthToJanuary(originalDate);
console.log(updatedDate); // Outputs: 2024-01-15T00:00:00.000Z (January 15, 2024)


// //Q11
// What is the method to change the day of the week for a
// specific date in JavaScript?


let date = new Date(2024, 9, 15); // October 15, 2024
// Change the date to the 1st of the month (to get a specific day of the week)
// Set to the 1st day of the month
date.setDate(1);
// Outputs: 2024-10-01T00:00:00.000Z (October 1, 2024)
console.log(date);


function changeToNextSunday(date) {
    // Get the current day of the week 
    // (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let currentDay = date.getDay();
    // Calculate the number of days to add to get to the next Sunday
    let daysUntilSunday = (7 - currentDay) % 7; // 0 if it's already Sunday, otherwise calculate the difference
    // Set the date to the next Sunday
    date.setDate(date.getDate() + daysUntilSunday);
    return date;
}

// Example usage:
// October 15, 2024
let original_Date = new Date(2024, 9, 15); 
let nextSunday = changeToNextSunday(original_Date);
// Outputs: 2024-10-20T00:00:00.000Z (Next Sunday)
console.log(nextSunday); 


// //Q12
// Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)

function changeMinutes(date) {
    let mins = prompt("Enter new minutes (0-59):");
    mins = parseInt(mins, 10);
    
    if (mins >= 0 && mins < 60) date.setMinutes(mins);
    else alert("Invalid minutes!");

    return date;
}

// Example usage:
let date = new Date();
console.log("Original Date:", date);
console.log("Updated Date:", changeMinutes(date));


// //Q13
// Write a JavaScript function to add a specific number of
// hours to a given time.

function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}

// Example usage:
let date = new Date();
let hoursToAdd = parseInt(prompt("Enter hours to add:"));
console.log("Updated Date:", addHours(date, hoursToAdd));


// //Q14
// You have to create a age calculator in JavaScript.

function calculateAge() {
    let birthDate = new Date(prompt("Enter your birth date (YYYY-MM-DD):"));
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        age--;
    }

    console.log("Your age is:", age);
}

// Call the function
calculateAge();
