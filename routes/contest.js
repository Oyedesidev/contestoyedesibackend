const express = require("express");
const router = express.Router();

const { create } = require("../controllers/contest");
const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

// router.get("/product/:productId", read);
router.post("/contest/create", create);

module.exports = router;
