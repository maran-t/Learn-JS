
var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Login successfully");
//     if(isEmailVerified){
//         console.log("Email Verified");
//         if (cardInfo) {
//             console.log("Verified CardInfo");
//             console.log("Can Purchase Now!")
//         }

//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo ){
    console.log("You can Purchase now !")
}else{
    console.log("Err, Please check later !");
}