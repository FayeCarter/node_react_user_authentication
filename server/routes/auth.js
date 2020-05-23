const router = require("express").Router();
const pool = require("../db")
const bcrypt = require("bcrypt")

//register

router.post("/register", async (req, res) => {
  try {
    //get name, email and password fro req.body

    const { name, email ,password } = req.body

    //check if user exists -> throw error

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already Exists!")
    }

    //BCRYPT user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //enter new user inside database

    const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *", [name, email, bcryptPassword])

    res.json(newUser.rows[0])
    //generate jwt toke
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server Error");
  }
})
module.exports = router;