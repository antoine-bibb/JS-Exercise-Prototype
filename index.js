/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
} 

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}


Person.prototype.poop = function(){
  this.stomach = [];
}


Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('Antoine', 30);
const personTwo = new Person('Teara', 28);
const personThree = new Person('Bella', 3);

console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

personTwo.eat('cheeseburger');
personTwo.eat('french fries');
personTwo.eat('apple pie');
personTwo.eat('large dr. pepper');
personOne.eat('chicken strip');
personOne.eat('chicken strip');
personOne.eat('chicken strip');
personOne.eat('chicken strip');
personOne.eat('chicken strip');
personOne.eat('french fries');
personOne.eat('large coke');
personOne.eat('cookie');
personOne.eat('cookie');
personThree.eat('chicken nugget');
personThree.eat('chicken nugget');
personThree.eat('chicken nugget');
personThree.eat('chicken nugget');
personThree.eat('french fries');
personThree.eat('juice box');

console.log(personOne.stomach);
console.log(personTwo.stomach);
console.log(personThree.stomach);

personOne.poop();

console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
this.model = model;
this.milesPerGallon = milesPerGallon;
//this.odometer = odometer;
this.tank = 0;
this.odometer = 0;
}
Car.prototype.fill = function(gallons){
    this.tank += gallons;
  }

Car.prototype.drive = function(distance){
  this.odometer = distance;
}
Car.prototype.toStrings = function(){
  return `${this.model} gets ${this.milesPerGallon} MPG in the City!`;
}
const carOne = new Car('Porche Panamera', 19);
const carTwo = new Car('Corvette StingRay', 15);
const carThree = new Car ('Range Rover', 22);

console.log(carOne.toStrings());
console.log(carTwo.toStrings());
console.log(carThree.toStrings());

carOne.fill(5);
carTwo.fill(5);
carThree.fill(8);

console.log(carOne.tank);
 console.log(carTwo.tank);
 console.log(carThree.tank);

carOne.drive(18);
carTwo.drive(13);
carThree.drive(20);

 console.log(carOne.odometer);
 console.log(carTwo.odometer);
 console.log(carThree.odometer);


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
Person.call(this, name, age);
this.toy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function (){
  console.log `${name}likes to play with his ${this.toy} its his favorite!`
}

  
const personFour = new Baby({
  name: 'junior',
  age: 5,
  favoriteToy: 'trains'

});
personFour.play();
console.log(personFour.play);
/*

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
