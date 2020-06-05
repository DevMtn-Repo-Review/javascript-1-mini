//////////////////PROBLEM 1////////////////////

// JavaScript doesn't care if you use single or double quotes for your strings
// Make a variable named greeting with a data type of string that says "Hi" (with double quotes)
// After the first variable, make a variable named farewell with a data type of string that says 'Goodbye' (with single quotes)

// Code here
let greeting = "Hi";
let farewell = 'Goodbye';

//////////////////PROBLEM 2////////////////////

// Make a variable called hello with a data type of a string that says "Hello"
// Next, make a variable called userName with data types of string that is your name
// Concatenate hello and userName together and store the result in a variable called salutation

//Code here
let hello = 'Hello';
let userName = 'Lucas';
let salutation = hello + userName;

//////////////////PROBLEM 3////////////////////

//Create a variable called seven that has a number data type with the value of 7

//Code here
let seven = 7

//////////////////PROBLEM 4////////////////////

// Make a variable called money with a value equal to the amount you wish to have in your bank account in 2 years
// This datatype should be a number

//Code here
let money = 1000

//////////////////PROBLEM 5////////////////////

// Make a variable called awesome and give it a value of the boolean data type true

//Code here
let awesome = true

//////////////////PROBLEM 6////////////////////

// Set the variable myCar to be null

let myCar = "Jeep";

//Code here
myCar = null;

//////////////////PROBLEM 7////////////////////

// Create a variable called users which should be an array with 4 items in it
// Each item should be an object, and each object should have 2 properties: name (string) and age (number)

//Code here
let users = [
	{ name: "Lucas", age: 27 },
	{ name: "Ashley", age: 27 },
	{ name: "Remington", age: 1 },
	{ name: "Dad", age: NaN },
];

//////////////////PROBLEM 8////////////////////

// Create a variable called family which should be an object
// This object should have 3 keys/properties which will be the names of people (you can choose these names)
// Each property will have a corresponding value which will be an object with one property called "hobbies"
// Each hobbies property will have a corresponding value which will be an object

//Code here
let family = {
	Lucas: {hobbies: {}},
	Ashley: {hobbies: {}},
	Remington: {hobbies: {}}
};

//////////////////PROBLEM 9////////////////////

// Create a variable called gameScores which should be an array with 3 items in it
// Each item should be an array with 2 items (numbers) in each array

//Code here
let gameScores = [
  [0,0],
  [0,0],
  [0,0]
];

//////////////////PROBLEM 10////////////////////

// Create a variable called people which should be an array of 3 objects
// Each object should have 3 properties: name (string), gender (string), height (number) in each array

//Code here
const people = [
	{ name: "", gender: "", height: 0 },
	{ name: "", gender: "", height: 0 },
	{ name: "", gender: "", height: 0 },
];

//////////////////PROBLEM 11////////////////////

// Create a variable called cowboy which should be an object
// This object should have 3 properties: name (string), state (string), favoriteCountrySong (string)

//Code here
const cowboy = {
  name: "Clint Eastwood",
  state: "CA",
  favoriteCountrySong: "Joleen"
};

//////////////////PROBLEM 12////////////////////

// Create a variable called dataTypes which should be an array of the following 6 items:
//   the number 42
//   the string "meaning"
//   the boolean true
//   an array with 5 numbers
//   the object spaceship
//   the function launch

const spaceship = {
	fuel: "liquid hydrogen",
	topSpeed: 36000,
	fuelLevel: 100,
	altitude: 0,
};

function launch() {
	spaceship.fuelLevel -= 30;
	spaceship.altidude += 1000;
}

//Code here
const dataTypes = [42, "meaning", true, [1, 2, 3, 4, 5], spaceship, launch];

//////////////////PROBLEM 13////////////////////

// Create two variables number1 and number2 and assign them number values
// Edit the function called "sum" so that when it is invoked, it returns the result of adding number1 and number2

let number1 = 12;
let number2 = 13;

// function sum(num1, num2){
//   // Code here
// };

function sum(num1, num2){
  return num1 + num2;
};

//////////////////PROBLEM 14////////////////////

// Using the number1 and number2 variables from Problem 5,
// edit the function called "multiply" so that when it is invoked, it returns the result of multiplying number1 and number2

// function multiply() {
//   // Code here
// };

function multiply() {
  return number1 * number2;
};

//////////////////PROBLEM 15////////////////////

// Edit the function favFood so that when it is invoked it returns the string "My favorite food is pizza"
// In your solution code, use template strings (not concatenation) and use the food variable

let food = 'pizza';

// function favFood(){
//   // Code here
// };

function favFood(){
  return `My favorite food is ${food}`;
};

//////////////////PROBLEM 16////////////////////

// Edit the function assignName so that when it is invoked with the variable theName passed in as an argument,
// the function assigns the value of theName to theBoss variable

let theName = 'Jeremy';
let theBoss;

// function assignName(name){
//   // Code here
// };

function assignName(name){
  theBoss = name;
};

//////////////////PROBLEM 17////////////////////

// Using the user object provided below,
// edit the function getName so that it access the name property of the user object and returns its value

let user = {
  name: "Billy",
  age: 18,
  email: "billy123@billy.com"
};

// function getName(userObj){
//   return // Code here
// };

function getName(userObj){
  return userObj.name;
};

//////////////////PROBLEM 18////////////////////

// Edit the function getWeekDay so that it returns the 3rd item in the weekDays array stored in the calendar object

// Be sure not to type the string "Tuesday" on the return line of the function
// Make sure you are accessing it from the weekDays array of the calendar object

let calendar = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
}

// function getWeekDay(calendar){
//   return // Code here
// }

function getWeekDay(calendar){
  return calendar.weekDays[2]
}

//////////////////PROBLEM 19////////////////////

// Create a function called "fn" that takes in a parameter and returns that parameter

// Code here
function fn(parameter){
  return parameter
}

//////////////////PROBLEM 20////////////////////

// Create a function called createName that takes in no parameters and returns the result of concatenating firstName and lastName
// The returned value should include a space between the first and last names and should use concatenation (not template strings)

let firstName = "Indiana";
let lastName = "Jones";

// Code here
function createName(){
  return firstName + ' ' + lastName
}

//////////////////PROBLEM 21////////////////////

// Create a function called showMeSeven that returns the number 7

// Code here
function showMeSeven(){
  return 7;
};

//////////////////PROBLEM 22////////////////////

// Create a function called multiplier that takes two parameters (numbers) and returns the product of the two numbers

// Code here
function multiplier(num1, num2){
  return num1 * num2;
};

//////////////////PROBLEM 23////////////////////

// Create a function called sayHello that takes two parameters: a greeting (string) and a name (string)
// This function should return a string that is the result of concatenating the greeting and name parameters
// The returned value should include a space between the greeting and name parameters

// Code here
function sayHello(greeting, name){
  return greeting + ' ' + name;
};

//////////////////PROBLEM 24////////////////////

// Create a function called makeExercise that takes two parameters: exerciseName (string) and duration (number)
// This function should return an object with two key-value pairs
// The first property should be exerciseName with the value of the first parameter
// The second property should be duration with the value of the second parameter

// Code here
function makeExercise(exerciseName, duration){
  return {exerciseName, duration}
};

//////////////////PROBLEM 25////////////////////

// Inside the isOldEnough function, write an if/else statement that will return "old enough" if the age variable is greater than 21 and returns "not yet" otherwise
// Use the if and else keywords in your solution
// The variable age will be changed during testing

let age = "TBD";

// function isOldEnough(){
//   // Code here
// };

function isOldEnough(){
  if(age > 21) {
    return 'old enough';
  } else {
    return 'not yet';
  }
};

//////////////////PROBLEM 26////////////////////

// Inside the successPredictor function, write an if/else statement that will return "success at DevMountain" if the workEthic variable is "great" and returns "failure at DevMountain" otherwise
// Use the if and else keywords in your solution
// The variable workEthic will be changed during testing

let workEthic = "TBD";

// function successPredictor(){
//   // Code here
// };

function successPredictor(){
  if(workEthic === "great") {
    return 'success at DevMountain';
  } else {
    return 'failure at DevMountain';
  }
};

//////////////////PROBLEM 27////////////////////

// Inside the eatOrTrash function, write an if/else statement that will return "throw in trash" if the cookieType variable is "raisin" and returns "eat" otherwise
// Use the if and else keywords in your solution
// The variable cookieType will be changed during testing

let cookieType = "TBD";

// function eatOrTrash(){
//   // Code here
// };

function eatOrTrash(){
  if(cookieType === "raisin") {
    return 'throw in trash';
  } else {
    return 'eat';
  }
};

//////////////////PROBLEM 28////////////////////

// Inside the finalScore function, write an if/else statement that will return "we are the champions" if the myTeamScore variable is greater than the yourTeamScore variable and returns ":(" otherwise
// Use the if and else keywords in your solution
// The myTeamScore and yourTeamScore variables will be changed during testing

let myTeamScore = "TBD";
let yourTeamScore = "TBD";

// function finalScore(){
//   // Code here
// };

function finalScore(){
  if(myTeamScore > yourTeamScore) {
    return 'we are the champions';
  } else {
    return ':(';
  }
};

//////////////////PROBLEM 29////////////////////

// Inside the findCorrectTransportation function, write an if/else statement that will check the age variable and return the correct response according to the following criteria:
  // if age is from 3 to 7, return "tricycle"
  // if age is from 8 to 15, return "bicycle"
  // if age is greater than 15, return "car"

// Use the if and else keywords in your solution
// The variable age will always be a number and will be changed during testing

age = "TBD";

// function findCorrectTransportation(){
//   // Code here
// };

function findCorrectTransportation() {
	if (age > 2 && age < 8) {
		return "tricycle";
	} else if (age >= 8 && age < 16) {
		return "bicycle";
	} else {
		return "car";
	}
};

//////////////////PROBLEM 30////////////////////

// Inside the doIGetIceCream function, write an if/else statement that will check the cash and temp variables and return the correct response according to the following criteria:
  // if temp is equal to "hot" and money is true, return "Get Ice Cream!"
  // otherwise return "Save up for another day."

// Use the if and else keywords in your solution
// The variable age will always be a number and will be changed during testing

let cash = "TBD";
let temp = "TBD";

// function doIGetIceCream(){
//   // Code here
// };

function doIGetIceCream() {
	if (temp === "hot" && cash) {
		return "Get Ice Cream!";
	} else {
		return "Save up for another day.";
	}
};

//////////////////PROBLEM 31////////////////////

// Inside the doIHaveFreeTime function, write an if/else statement that return "free time!" if either chores or work are false

// In your solution, be sure to use the logical NOT operator (bang operator) instead of using true or false keywords
// Use the if and else keywords in your solution
// The chores and work variables will always be true or false and will be changed during testing

let chores = "TBD";
let work = "TBD";

// function doIHaveFreeTime(){
//   // Code here
// };

function doIHaveFreeTime() {
	if (!chores || !work) {
		return "free time!";
	};
};

//////////////////PROBLEM 32////////////////////

// Inside the setCrash function, write an if/else statement that will set the value of crash to true if currentSpeed is "fast" and brakes is false and does nothing otherwise

// In your solution, be sure to use the logical NOT operator (bang operator) instead of using true or false keywords
// Use the if and else keywords in your solution
// The currentSpeed variables will always be a string and will be changed during testing
// The brakes variables will always be a boolean and will be changed during testing

let crash = false;
let currentSpeed = "TBD";
let brakes = "TBD";

// function setCrash(){
//   // Code here
// };

function setCrash() {
	if (currentSpeed === "fast" && !brakes) {
		crash = true;
	};
};

//////////////////PROBLEM 33////////////////////

// Write a function called makePurchase that takes in a parameter called priceOfItem
// If priceOfItem is less than or equal to the total on the user object, have the makePurchase function subtract priceOfItem from the user's total
// If the priceOfItem is greater than the user total, makePurchase should return "not enough funds"

// Use the if and else keywords in your solution
// The arguments passed into makePurchase will always be numbers and will be changed during testing

user = {
  name: "Tiffany",
  total: 50
}

// Code here
function makePurchase(priceOfItem) {
	if (priceOfItem <= user.total) {
		user.total -= priceOfItem;
	} else {
    return "not enough funds"
  };
};

//////////////////PROBLEM 34////////////////////

// Write a function called decisionMaker that takes two parameters hungry and tired and and reacts according to the following criteria:
  // if hungry is true and tired is false, invoke the eat function
  // if hungry is false and tired is true, invoke the sleep function
  // otherwise, return the string "undecided"

// In your solution, be sure to use the logical NOT operator (bang operator) instead of using true or false keywords
// Use the if and else keywords in your solution
// The arguments passed into decisionMaker will always be true or false and will be changed during testing

let hunger;
let fatigue;

function eat(){
  hunger = "gone";
  return "yum yum";
}

function sleep(){
  fatigue = "gone";
  return "zzz zzz zzz";
}

// Code here
function decisionMaker(hungry, tired) {
	if (hungry && !tired) {
		return eat();
	} else if (!hungry && tired) {
		return sleep();
	} else {
		return "undecided";
	};
};