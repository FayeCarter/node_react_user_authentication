const express = require('express');
const cors = require("cors");
const app = express();
const pool = require("./db")


// middleware
app.use(cors());
app.use(express.json());

//routes

//register and login routes

app.use("/auth", require("./routes/auth"));


app.listen(5000, () => {
	console.log("server has started on port 5000")
})