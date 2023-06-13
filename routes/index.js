const express = require("express");

const router = express.Router();

const nearpayController = require("../controllers/nearpayController");

// #1 Registration
router.post("/registration", nearpayController.registration);

module.exports = router;
