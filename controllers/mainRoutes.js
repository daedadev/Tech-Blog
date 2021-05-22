const router = require("express").Router();
const User = require("../models/User");

// home route
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
