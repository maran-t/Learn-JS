tipper("5")

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5)
}

// tipper(5)
// tipper("a")


// bigTipper("5")
//variable declaration are scanned & made undefinded
//so, var bigTipper is undefined and we are tring to access as a method

var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15)
}
bigTipper(10) //it works


console.log(name);
//variable declaration are scanned & made undefinded
var name = "mani";

//has it own execution context 
function sayName() {
    var name = "Mr MM"
    console.log(name);
}

sayName();
console.log(name);