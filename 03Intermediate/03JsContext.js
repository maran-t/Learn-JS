sayHello();

function sayHello(){
    console.log("Hello !");
}

//context types - global context(collecting everything), execution context(current, every line of code) 
//in execution context -> variable object, scope chain, this

//function declaration are scanned & made available
//variable declaration are scanned & made undefinded

var myName = "maran";

//window object is majorly supported on browser, not on node
// if(myName == window.myName){
//     console.log("This is true")
// }