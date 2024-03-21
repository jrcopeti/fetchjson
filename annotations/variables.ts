const apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

// let nothingMuch: null = 3; // Error: Type '3' is not assignable to type 'null'.

let now: Date = new Date();

//  Array

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let thruths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = { x: 10, y: 20 };

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that returns the "any" type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//  3) Variable whose type cannot be inferred correctly
// Type annotation is needed to avoid error
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

const add = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return null or undefined
};

const throwError = (message: string) => {
  throw new Error(message);
};

// never annotation only when we know it won't return anything

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name: namis }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

const carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // Error: Argument of type '100' is not assignable to parameter of type 'string'.

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})


// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
}
// type alias or tuple
type Drink = [string, boolean, number];


const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

pepsi[0] = 40; // Error: Type '40' is not assignable to type 'string'.

const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
}

// Interface
// Create a new type, describing the property names and value types of an object (custom type)


