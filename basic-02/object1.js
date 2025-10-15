// singleton -- when we create object using constructor 
    
// Object.create--constructor method

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full_name": "Hitesh Choudhary",
    [mySym]: "mykey1", // for symbol we have to declare key in []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.full_name)-- cant access bevause key is in string so we can only access it by []
// console.log(JsUser["full name"])--right way
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());