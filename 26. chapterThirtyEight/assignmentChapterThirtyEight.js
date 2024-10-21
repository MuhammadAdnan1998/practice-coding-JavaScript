// //Q1
// Write a JavaScript function that demonstrates the usage of a local
// variable.

function greetUser(name) {
    // Local variable declaration
    let greeting = "Hello, " + name + "!";
  
    console.log(greeting);
  }
  
// Call the function with an argument
greetUser("Adnan"); 
// Output: Hello, Adnan!
  

// //Q2
// How can you access a global variable inside a function in
// JavaScript?

// Global variable
let globalMessage = "This is a global variable.";

function showMessage() {
  // Accessing the global variable inside the function
  console.log(globalMessage);
}

// Calling the function
showMessage();  
// Output: This is a global variable.
