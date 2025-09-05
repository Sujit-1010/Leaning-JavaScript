// Immediately Invoked Function Expressions (IIFE)

// to avoid global pollution we use fe or to remove pollution 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//if we cant end  above func with semi colon then below func give error  
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();


//Arrow Function 

( () => {
    console.log(`DB CONNECTED TWO`);
} )();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')