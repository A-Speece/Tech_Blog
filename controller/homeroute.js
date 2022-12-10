const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      blogPosts: [
        {
          blog_title: "the title of the blog",
          blog_content: "the content of the blog",
        },
        {
          blog_title: "the title of the blog",
          blog_content: "the content of the blog",
        },
      ],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/newpost", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render("new-post");
  } else {
    res.render("login");
  }
});

router.get("/profile", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render("profile");
  } else {
    res.render("login");
  }
});

module.exports = router;
