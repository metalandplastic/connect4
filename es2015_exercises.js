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

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]: function() {
      console.log(noise);
    }
  };
}
