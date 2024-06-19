const user = {
    username: "satyam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// console.log(this);


// function child() {
//     let username = "satyam"
//     console.log(this.username);
// }

// child()

// const one = function() {
//     let username = "satyam"
//     console.log(this.username);
// }

// one()

const one = () => {
    let username = "satyam"
    console.log(this);
}

one()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }


// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)

const addtwo = (num1, num2) =>  ({username: "satyam"})

console.log (addtwo(3,4))


// const myNewArray = [2,3,5,6]

// myNewArray.forEach()