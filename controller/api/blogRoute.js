const router = require("express").Router();
const { Blog, Comment } = require("../../models");

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Blog.findAll({
    include: Comment,
  }).then((blogs) => {
    res.json(blogs);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Blog.findByPk(req.params.id, {
    include: Comment,
  }).then((blog) => {
    res.json(blog);
  });
});

router.post("/", (req, res) => {
  // create a new category
  try {
    const userData = Blog.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Blog.update(
    req.body,
    {
      where: {
        id: req.params.id,
      },
    },
    {
      new: true,
    }
  ).then((blog) => {
    res.json(blog);
  });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Blog.destroy({
    where: {
      id: req.params.id,
    },
  }).then((blog) => {
    res.json(blog);
  });
});

module.exports = router;
