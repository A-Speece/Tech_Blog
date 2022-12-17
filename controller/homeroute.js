const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    Blog.findAll({
      include: Comment,
    }).then((blogs) => {
      console.log(blogs);
      const blogPosts = blogs.map((blog) => blog.get({ plain: true }));
      res.render("homepage", {
        blogPosts: blogPosts,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    Blog.findByPk(req.params.id, {
      include: Comment,
    }).then((blog) => {
      console.log(blog);
      const blogPost = blog.get({ plain: true });
      res.render("single-post", {
        blogPost: blogPost,
      });
    });
  } catch (err) {
    console.log(err);
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
