const router = require("express").Router();
const userRoute = require("./userRoute");
const blogRoute = require("./blogRoute");

router.use("/users", userRoute);
router.use("/users", blogRoute);

module.exports = router;
