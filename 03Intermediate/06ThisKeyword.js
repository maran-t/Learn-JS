//this -> access to global context
console.log(this); //{}

var game = "basketball";

function sayName(){
    var name = "mani";
    console.log(this);
}
sayName();

