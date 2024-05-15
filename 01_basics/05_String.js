// const name = "satyam";
// const age = 50;

// console.log(name + count + "Value");

console.log(`Hello My name is ${name} and my age ${age}`);

const gameName = new String('satyam_chauhan');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     rajput    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyam.com/chauhan%20chauhan";

console.log (url.replace('%20', '-'));

console.log (url.includes('satym'));

console.log(gameName.split('-'));