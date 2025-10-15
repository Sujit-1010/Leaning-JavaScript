// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);//false 
console.log(null == 0);//false 
console.log(null >= 0);//true

/*
the reson is that an equality check == and comparisiob < > >= <= work differently
compariosn convert null to a num , treating as 0 thats why null>=0 is true and null >0 is fasle
*/

console.log(undefined == 0);
console.log(undefined > 0);//false for all
console.log(undefined < 0);

// === (Equality) strict check not only value also its data type

console.log("2" === 2);