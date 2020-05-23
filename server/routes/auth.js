const router = require("express").Router();


//register

router.post("/", async (req, res) => {
  try {
    //get name, email and password fro req.body

    //check if user exists -> throw error

    //BCRYPT user password

    //enter new user insted database

    //generate jwt toke
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server Error");
  }
})
module.exports = router;