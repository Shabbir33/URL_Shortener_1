const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.route("/").get(controller.getURLs).post(controller.addURL)
router.route("/:shortURL").get(controller.getShortURL)

module.exports = router;