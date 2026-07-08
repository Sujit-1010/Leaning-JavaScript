const accountId = 123456
let accountMail = "sujit@gmail.com"
var accountPass = "12345"
accountCity = "jaipur"
let name ; // undefined

//accountId = 5 // not allowed because of const

accountMail = "abcd@gmail.com"
accountPass = "7894"
accountCity = "Barshi"

console.table([accountId,accountMail,accountPass,accountCity,name])

/*
prefer not to use var 
beacuse of issue in block and functional scope
*/

//use const and let

// const with Objects (Tricky Interview Question)

const user = {
    name:"Sujit",
    age:21
};

user.age = 22;
console.log(user);

//Why allowed? -- Because const protects the reference, not internal values.


/* 

Before 

user(#100)
       |
       ↓
{
 name:"Sujit",
 age:22
}

After 

user(#100)
       |
       ↓
{
 name:"Sujit",
 age:22
}

*/

user = {}; // this will give error bec here u are pointing to different location 