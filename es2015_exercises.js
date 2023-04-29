// LET/CONST
// var PI = 3.14;
// PI = 42; // stop me from doing this!
// solution
const PI = 3.14;

// ARROW FUNCTIONS

// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }
const double = (arr) => arr.map((val) => val * 2);

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }
const squareAndFindEvens = (numbers) =>
  numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);

// REST/REDUCE

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
const findMin = (...nums) => Math.min(...nums);

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((a) => a * 2),
];

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
  let list = Math.floor(Math.random() * items.length);
  return [...items.slice(0, list), ...items.slice(list + 1)];
};

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
  let newobj = { ...obj };
  newobj[key] = val;
  return newobj;
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// Object Enhancements Exercise

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"
let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// var teacher = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }
const teacher = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

// Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]: function () {
      console.log(noise);
    },
  };
}

// DESTRUCTURING EXCERCISES

// Object Destructuring 1
// What does the following code return/print?
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets);
8;
console.log(yearNeptuneDiscovered);
1846;

// Object Destructuring 2
// What does the following code return/print?
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let {numPlanets, ...discoveryYears} = planetFacts;
console.log(discoveryYears);
{
  yearNeptuneDiscovered: 1846, yearMarsDiscovered;
  1659;
}

// Object Destructuring 3

// What does the following code return/print?
// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
getUserData({
  firstName: "Alejandro",
  favoriteColor: "purple",
})`Your name is Alejandro and you like purple`;
getUserData({ firstName: "Melissa" })`Your name is Melissa and you like green`;
getUserData({})`Your name is undefined and you like green`;

// Array Destructuring 1
// What does the following code return/print?
// let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first);
Maya;
console.log(second);
Marisa;
console.log(third);
Chi;

// Array Destructuring 2
// What does the following code return/print?
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
// ]
console.log(raindrops);
("Raindrops on roses");
console.log(whiskers);
("whiskers on kittens");
console.log(aFewOfMyFavoriteThings);
[
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

// Array Destructuring 3
// What does the following code return/print?
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers)[(10, 30, 20)];

// ES2015 Refactoring
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Assigning Variables to Object Properties
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;
// /* Write an ES2015 Version */
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
const { a, b } = (obj.numbers[
  // ES5 Array Swap
  // var arr = [1, 2];
  // var temp = arr[0];
  // arr[0] = arr[1];
  // arr[1] = temp;
  // /* Write an ES2015 Version */
  (arr[0], arr[1])
] = [arr[1], arr[0]]);

// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

//   MAP AND SETS EXCERCISE

// Quick Question #1
// What does the following code return?
// new Set([1,1,2,2,3,4])
[1, 2, 3, 4];

// Quick Question #2
// What does the following code return?
// [...new Set("referee")].join("")
("ref");

// Quick Questions #3
// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
  0: {Array(3) => true}
  1: {Array(3) => false}

//   hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      const { [lowerCaseChar]: count = 0 } = vowelMap;
      vowelMap.set(lowerCaseChar, count + 1);
    }
  }
  return vowelMap;
}
