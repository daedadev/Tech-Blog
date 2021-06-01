const router = require("express").Router();
const { User, Comment, Post } = require("../models/");

// home route
router.get("/", async (req, res) => {
  try {
    let loggedUser;
    let userLoggedIn = "Jack";

    if (req.session.user_id) {
      loggedUser = await User.findAll({
        where: {
          id: req.session.user_id,
        },
        raw: true,
      });
      console.log(loggedUser[0]);
      userLoggedIn = loggedUser[0];
    }

    const Posts = await Post.findAll({
      include: User,
    });

    const postsArray = Posts.map((postInfo) => postInfo.get({ plain: true }));

    res.render("homepage", {
      logged_in: req.session.logged_in,
      user: userLoggedIn,
      postsArray,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// home route
router.get("/homepost/:id", async (req, res) => {
  try {
    let loggedUser;
    let userLoggedIn = "Jack";

    if (req.session.user_id) {
      loggedUser = await User.findAll({
        where: {
          id: req.session.user_id,
        },
        raw: true,
      });
      console.log(loggedUser[0]);
      userLoggedIn = loggedUser[0];
    }

    const Posts = await Post.findAll({
      where: {
        id: req.params.id,
      },
      include: User,
    });

    const postsArray = Posts.map((postInfo) => postInfo.get({ plain: true }));

    res.render("home-post", {
      logged_in: req.session.logged_in,
      user: userLoggedIn,
      postsArray,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Main dashboard
router.get("/dashboard", async (req, res) => {
  try {
    let loggedUser;
    let userLoggedIn = "Jack";

    if (req.session.user_id) {
      loggedUser = await User.findAll({
        where: {
          id: req.session.user_id,
        },
        raw: true,

        include: Post,
      });
      console.log(loggedUser[0]);
      userLoggedIn = loggedUser[0];
    }

    if (req.session.user_id) {
      posts = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
        include: User,
      });

      const postsArray = posts.map((postInfo) => postInfo.get({ plain: true }));

      console.log(postsArray);

      res.render("dashboard", {
        logged_in: req.session.logged_in,
        user: userLoggedIn,
        postsArray,
      });
    } else {
      res.render("login", {
        logged_in: req.session.logged_in,
        user: userLoggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Submit Dashboard
router.get("/submitdash", async (req, res) => {
  try {
    let loggedUser;
    let userLoggedIn = "Jack";

    if (req.session.user_id) {
      loggedUser = await User.findAll({
        where: {
          id: req.session.user_id,
        },
        raw: true,
      });
      console.log(loggedUser[0]);
      userLoggedIn = loggedUser[0];
    }

    if (req.session.user_id) {
      posts = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
        raw: true,
      });

      res.render("dash-submit", {
        logged_in: req.session.logged_in,
        user: userLoggedIn,
        posts,
      });
    } else {
      res.render("login", {
        logged_in: req.session.logged_in,
        user: userLoggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login Routes -------------------------------------
router.get("/signup", async (req, res) => {
  try {
    let loggedUser;
    let userLoggedIn = "Jack";

    if (req.session.user_id) {
      loggedUser = await User.findAll({
        where: {
          id: req.session.user_id,
        },
        raw: true,
      });
      console.log(loggedUser[0]);
      userLoggedIn = loggedUser[0];
    }
    res.render("signup", {
      logged_in: req.session.logged_in,
      user: userLoggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    let loggedUser;
    let userLoggedIn = "Jack";

    if (req.session.user_id) {
      loggedUser = await User.findAll({
        where: {
          id: req.session.user_id,
        },
        raw: true,
      });
      console.log(loggedUser[0]);
      userLoggedIn = loggedUser[0];
    }
    res.render("login", {
      logged_in: req.session.logged_in,
      user: userLoggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
