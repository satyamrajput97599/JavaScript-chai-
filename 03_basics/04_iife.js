// Immediately Invoked function Expression (IIFE)

// function chai() {
//     console.log(`DB Connected`);
// }
// chai()

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();


( (name) => {
    console.log(`DB Connected Two ${name}`);
})('satyam')

