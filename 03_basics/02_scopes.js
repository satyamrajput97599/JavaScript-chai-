// var c = 40
let a = 200

if (true) {
    let a = 10
    const b = 20;
    // console.log("INNER: ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "satyam";

    function two() {
        const website = "satyam.com"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one()

if (true) {
    const username = "satyam"
    if (username === "chauhan") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);




// +++++++++++++++++++++++ Interesting ++++++++++++++

console.log(addone(5))
function  addone(num) {
    return num + 1
}


addtwo(5)
const addtwo = function(num) {
    return num + 2
}

