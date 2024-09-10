// ______________________________________________________________

// Assignment: Chapter 16  (Array III)
// ______________________________________________________________

// // Q1
// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);

// // Q2
// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift("P", "Q", "R");
// console.log(sizes);

// // Q3
// Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element

// array2 = ["February"];
// array2.unshift("January");
// alert(array2[0]);

// // Q4
// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes);

// // Q5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// regSizes = sizes.slice(0, 3);
// console.log(regSizes);

// // Q6
// var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 0, "dog1", "dog2");
// pets.splice(3, 3);
// console.log(pets);

// // Q7
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2);
// console.log(pets);

// // Q8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// pets = pets.slice(3, 5);
// console.log(pets);
