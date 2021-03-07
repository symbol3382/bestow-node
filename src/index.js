const express = require("express");
const app = express();
// require will export UserManager class and its object will be created immediately
const UserManager = new (require('./Manager/userManager'))();


app.post('/api/user/register', UserManager.register);


app.listen(3000, function() {
    console.log("Node server started running on ", 3000, " port");
})