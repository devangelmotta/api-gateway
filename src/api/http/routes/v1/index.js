const express = require("express");
const authRoutes = require("./entry-request");

const router = express.Router();

/**
 * GET gateway/status
 */
router.get("/status", (req, res) => res.send("OK"));

/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

router.use("/notes", authRoutes);

module.exports = router;
