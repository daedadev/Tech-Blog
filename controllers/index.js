const router = require("express").Router();
const mainRoutes = require("./mainRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/", mainRoutes);
router.use("/api", apiRoutes);

module.exports = router;
