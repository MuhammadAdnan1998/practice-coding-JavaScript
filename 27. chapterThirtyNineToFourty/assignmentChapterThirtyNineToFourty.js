// // Q1
// Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.

let day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day");
}


// // Q2
// Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

let cityName = prompt("Enter your city name:");

switch (cityName.toLowerCase()) {
  case "karachi":
    alert("Welcome to Karachi, the City of Lights!");
    break;
  case "lahore":
    alert("Welcome to Lahore, the Heart of Pakistan!");
    break;
  case "islamabad":
    alert("Welcome to Islamabad, the Capital of Pakistan!");
    break;
  case "peshawar":
    alert("Welcome to Peshawar, the City of Flowers!");
    break;
  default:
    alert("City not recognized, please enter a valid city name.");
}