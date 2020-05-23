const jwt = require("jsonwebtoken");
require("dotenv").config()


module.exports = async(req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if(!jwtToken) {
      return res.status(403).json("Not Authourised");
    }

    const payload = jft.verify(jwtToken, process.env.jwtToken)

    req.user = payload.user;

  } catch (error) {
    console.error(error.message);
    return res.status(403).json("Not Authourised");
  }
}