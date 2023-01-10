require("dotenv").config();

const express = require("express");
const connectDB = require("./db/connect");
const router = require("./routes/router");

const app = express();

//Middleware
app.use(express.static("public"));
//EJS Config
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

//Router
app.use("/", router);




const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        //Connect Database
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, (req, res) => console.log(`Server listening on port: ${PORT}`))       
    } catch (err) {
        console.log(err);
    }
}

start();