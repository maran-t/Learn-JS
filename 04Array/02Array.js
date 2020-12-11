var isEven = (element) => {
    // if(element %2 === 0){
    //     return true;
    // }
    // return false;
    return element %2 === 0 ;
}

// console.log(isEven(5));

// var output = [2,2,4,4].every(isEven); //f all are pass return true, use it for many cases not only this!
// console.log(output);

//call back fn

// var output = [2,2,4,4].every( () => {} ); 

var output = [2,2,5,4].every((e) => {
    return e %2 === 0;
}); 

console.log(output);

// var output = [2,2,4,4].every((e) =>  e %2 === 0 );  //if you don't want return remove curly braces
// console.log(output);