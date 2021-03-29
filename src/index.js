const express = require("express");
const app = express();
const cors = require('cors');
const coreRoutes = require('./routes/coreRoutes');

app.use(cors());
app.use('/api', coreRoutes);

app.listen(5000, function() {
    console.log("Node server started running on ", 3000, " port");
})