const express = require("express");
const {
  addDoc,
  getDocs
} = require("../controllers/docController"); 
const router = express.Router();

router.route("/").post(addDoc).get(getDocs);

module.exports = router;
