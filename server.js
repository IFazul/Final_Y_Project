const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/shops");
const adminRoutes = require("./routes/admin");

const port = process.env.PORT || 3080;

const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use(userRoutes);
app.use("/admin",adminRoutes);

app.listen(port,() => {
    console.log(`The server is running on PORT ${port}`);
})