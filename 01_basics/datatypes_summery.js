// Primitive

// 7 types : String, Number, Boolean, null, undefine,Symbol, BigInt

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;   // undefine

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 155554551n;
// console.log(bigNumber);


// Reference (Non primitive)

// Array, objects, Functions, 

const heros = ["Satyam", "Aman", "Chauhan"];
let myObj = {
    name: "satyam",
    age: 23,
}

const myFunction = function(){
    console.log("Hello Javascript");
}

console.log(typeof myFunction);




// ********************************************************

// Stack (Primitive), Heap (Non-Primitive) Memory

// let myName = "Satyam"

// let anothername = myName
// anothername = "rajput"

// console.log (myName);
// console.log (anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ypl"
}

let userTwo = userOne

userTwo.email = "satyam@google.com";

console.log(userOne.email);
console.log(userTwo.email)