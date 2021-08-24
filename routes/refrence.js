const express = require("express");
const router = express.Router();

const { create } = require("../controllers/refrence");
const { requireSignin, isAuth } = require("../controllers/auth");
// const { userById } = require("../controllers/refrence");

// router.get("/product/:productId", read);
router.post("/refrence/create", create);

module.exports = router;
