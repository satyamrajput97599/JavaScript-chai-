function MyName() {
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

// MyName()


// function addTwoNumber(number1, Number2) {

//     console.log(number1 + Number2);
// }
function addTwoNumber(number1, Number2) {

    // let result = number1 + Number2;
    // console.log(("satyam"));
    // return result;

    return number1 + Number2;
    
}

const result = addTwoNumber(3,6)

// console.log("Result : ", result);

function loginUserMessage(username = "chauhan") {
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("satyam"));
console.log(loginUserMessage("satyam"));



function calculateCartPrice(val1, val2, ...num1) {   // ...rest
    return num1 
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    name: "satyam",
    price: 299
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username : 'chauhan',
    price : 199
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,50,100]));