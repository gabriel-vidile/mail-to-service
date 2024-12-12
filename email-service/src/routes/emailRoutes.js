const express = require("express");
const { sendEmailHandler } = require("../controllers/emailController");
const router = express.Router();

router.post("/send", sendEmailHandler);

module.exports = router;
