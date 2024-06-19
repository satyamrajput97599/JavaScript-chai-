// singleton 

// object literals
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Satyam",
    "full name": "satyam Chauhan",
    [mySym]: "mykey1",
    age: 22,
    location: "Dehradun",
    email: "satyam@google.com",
    issLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser [mySym]);


JsUser.email = "chauhan@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "chauhan@gmail.com";
// console.log(JsUser);

JsUser.greetng = function(){
    console.log("hello Js");
}

JsUser.greetngTwo = function(){
    console.log(`hello Js User, ${this.name}`)
}

console.log(JsUser.greetng());
console.log(JsUser.greetngTwo());