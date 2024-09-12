// ______________________________________________________________

// Assignment: Chapter 22-25 (Strings)
// ______________________________________________________________

// // Q1
// "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

// var sameWords = "captain";
// var y = sameWords.slice(1, 3);
// console.log(y);

// // Q2
// The number of characters in the string will be assigned to the
// variable.

// // Q3
// The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

// var animal = "elephant";
// var seg = animal.slice(2, 6);
// console.log(seg);

// // Q4
// Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

// var a = "ABCDEFGH";
// var b = a.length;
// console.log(b)

// // Q5
// In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.

// var a = "ABCDEFGH";
// var b = a.length;
// console.log(b)

// var c =a.slice(0,1)+a.slice(a.length-3)
// console.log(c)

// // Q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);

// // Q7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// // Q8
// Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.

// var text = "You must go out";
// var indx = text.lastIndexOf("go");
// console.log(indx);

// // Q9
// Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.

// if (indexNum !== -1) {

// }

// // Q10
// In this string "abcde", what character is at index 2? (Use charAt)

// var b = "abcde";
// var text = b.charAt(2);
// console.log(text);

// // Q11
// Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.

// var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, modi veritatis pariatur esse, qui libero voluptatibus, officia nemo dolores doloribus illo enim laborum at eum ea tenetur quod odio atque";

// var cha = text.charAt(9);
// console.log(cha);

// // Q12
// Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

// var str = "Hello world";
// var x = str.charAt(str.length-1);
// console.log(x);

// // Q13
// Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

// var input = "Hello world";
// var cha = input.charAt(4);
// console.log(cha);

// // Q14 (to check)
// Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.

// var a = bcd;
// for (var i = 0; i < a.length; i++) {
//   // finding text
//   var character = a.slice(i, i + 3);
//   console.log(character);
//   if (character == "d") {
//     console.log("Character Found");
//   }
// }

// // Q15
// Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.

// // Q16 (correct)
// In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

// var str =
//   "This year, 1 Ramadan is expected on Sunday, March 10, 2024 and end on Tuesday, April 9, 2024";
// var newstr = str.replace("1", "one");
// console.log(newstr);

// // Q17
// If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");

// var x = "abc abc abc";
// var y = x.replace(/a/g, "z");  //g code for a global replace.
// console.log(y);
