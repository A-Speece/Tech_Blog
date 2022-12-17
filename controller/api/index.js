const router = require("express").Router();
const userRoute = require("./userRoute");
const blogRoute = require("./blogRoute");
const commentsRoute = require("./commentsRoutes");

router.use("/users", userRoute);
router.use("/blogs", blogRoute);
router.use("/comments", commentsRoute);

module.exports = router;
