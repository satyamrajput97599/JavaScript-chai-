// Dates


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 0, 23) // month start 0
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// let myCreatedDate = new Date("2024-05-15")
let myCreatedDate = new Date("05-15-2024")
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getDate();
console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
})

console.log();