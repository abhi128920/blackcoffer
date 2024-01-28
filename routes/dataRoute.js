const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.get("/data", dataController.getData);

// Add other routes as needed

module.exports = router;
