var user = "subadmin"

switch (user) {

    case "admin":
        console.log("you get full access")
        break;

    case "subadmin":
        console.log("get access to create/delete courses")
        break;

    case "testprep":
        console.log("get access to create/delete tests")
        break;

    case "user":
        console.log("access to consume contents")
        break;

    default:
        console.log("Trail User")
        break;
}