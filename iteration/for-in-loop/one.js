const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject) {
    //console.log(key); --only give only key  ex.js,cpp
}

for (const key in myObject) {
    //console.log(myObject[key]); --only give only values  ex.javascipt,C++
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`); // Both
}

//For in loop on array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key); --this gives only key values like index 0 ,1 ,2 ....
}

for (const key in programming) {
    //console.log(programming[key]); ==== values 
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//=== on hap we cant use for in loop 