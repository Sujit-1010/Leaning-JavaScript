
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//JS IS DYANAMICALLY TYPED LANGUAGE
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //FALSE

// const bigNumber = 3456543576654356754n
/// n represnt bigInt


// Reference (Non primitive)

// Array, Objects, Functions

//to master javascipt only masters in object and broswer events

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
//value inside curly braces are object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/       

       