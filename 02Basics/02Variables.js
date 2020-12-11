//user registration

const uid = "user01";

var fullName = "Manimaran T";
var eMail = "maran.mallow@gmail.com";
var password = "Maran@123";
var confirmPassword = "Maran@123";
var courseCount = 0; 
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name");
//not a good way to get input (alert/prompt)

// console.log(uid);
// console.log("FullName: "+fullName);
// console.log(eMail);


//interpolation

console.log(`
With UniqueId: ${uid}
MailId is: ${eMail}
FullName is: ${fullName}
And uses Password:${password}

`)
