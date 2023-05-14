let fname : string;
let age: number | string;
age = "4";
let male: boolean;
let hobbies: string[];
hobbies = ["swimming", "cooking"];

// tuple
let role: [number, string];
role = [4, "harsh"];

// object define
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "harsh",
};

let lotsOfPeople: Person[];

function printName(name: string) {
  console.log(name);
}
printName("hello");

let car1: any;
let car2: unknown;

// const personName1 = (name : string) => void {}
// const personName2 = (name : string) => never

// let x = {
//   a: String,
//   b: Number
// }
// let y = x & {
//   c: Number,
//   d: String
// }

interface person {
  name: string,
  age: Number
}

interface personData extends person {
  study: string,
  married: boolean
}
