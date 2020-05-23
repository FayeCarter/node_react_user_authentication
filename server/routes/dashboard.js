const router = require("express").Router();
const pool = require("../db");
const authorisation = require("../middleware/authorisation")

router.get("/", authorisation, async (req, res) => {
  try {
    const user = await pool.query("SELECT user_name FROM users WHERE id = $1", [req.user])

    res.json(user.rows[0])
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server Error");
  }
})

module.exports = router;