//to store number of elements which could be accessed using their index

var country = ["India","USA", "UK"];

var states = new Array("Tamil Nadu","Delhi","Chennai");

// console.log(country);
// console.log(states);

console.log(states[0]);
console.log(states.length);
states[2] = "punjab"; //replace values
console.log(states);

var user = ["maran.mallow@gmail.com","manimaran","15-05-1999"]

console.log(user);
user.pop(); //remove last element
console.log(user);

// user.push("user01"); //add into last
// console.log(user);

user.unshift("New Value"); //add new element on front
console.log(user);

user.shift(); //remove first element on the array
console.log(user);

console.log(user.indexOf("manimaran")); //search some element
console.log(user.indexOf("demo")); //if not output would be (-1)


//convert string to array
console.log(Array.from("manimaran"));