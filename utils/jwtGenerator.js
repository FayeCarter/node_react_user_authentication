const jwt = require("jsonwebtoken") 
require('dotenv').config();

function jetGenerator(id) {
  const payload = {
    user: id,
  }

  jwt.sign(payload, process.env.jetSecret, {expiresIn: "1hr"})
}

module.exports = jwtGenerator