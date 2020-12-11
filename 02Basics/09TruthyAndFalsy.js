
//Falsy - if we assign these values to any var means it would be considered as false

// undefined
// null
// 0
// ''
// NaN

//Anything apart from the above 4 keyword is considered as Truthy values

var user = undefined;

if (user) {
    console.log("LoggedIn");
}


//coercion
console.log(2 + "2");
console.log("2" + 2);

var value = "3";
//type coercion (to avoid, use === strict check)
// converts the 3 as string
if (3 == value) {
    console.log("coercion");
}