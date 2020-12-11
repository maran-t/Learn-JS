var getUserRole = function (name, role) {

    switch (role) {

        case "admin":
            return `Hi ${name}, you have access to all!`;
            break; //never executed, anything followed return 

        case "subadmin":
            return `Hi ${name}, you have access to create/delete courses!`;

        case "testprep":
            return `Hi ${name}, you have access to create/delete tests!`;

        case "user":
            return `Hi ${name}, you have access to consume contents !`;

        default:
            return "Hello, Guest User !"
            
    }

}

console.log(getUserRole("mani", "user"));