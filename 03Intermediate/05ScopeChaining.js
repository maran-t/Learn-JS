var iceCream = "strawberry";

console.log(iceCream);

// function sayIceName() {
//     console.log(iceCream);
// }


function sayIceName() {
    var iceCream = "vennila";
    console.log(iceCream);

    sayIceNameTwo();
    function sayIceNameTwo(){
        var iceCream = "Chocolate"; //it have own
        //else, ask iceCream to above(immediate parent) ifnot go above again
        //here it get from sayIceName function which is vennila
        console.log(iceCream);
    }
}
sayIceName();
