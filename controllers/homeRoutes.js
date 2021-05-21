const router = require("express").Router();
const user = require("../models/User");

router.get("/", async (req, res) => {
  // TODO: Render template with Sequelize data

  try {
    const userData = await user.findAll({
      include: [
        {
          attributes: { exclude: ["password"] },
          order: [['name', 'ASC']],
        },
      ],
    });

    const users = userData.map((userInfo) => userInfo.get({ plain: true }));

    res.render("homepage", { users });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
