const express = require("express");
const {
  addDoc,
  getDocs,
  getDocContentByName,
  getDocContentById
} = require("../controllers/docController"); 
const router = express.Router();

router.route("/").post(addDoc).get(getDocs);

router.route("/name/:docName").get(getDocContentByName);

router.route("/:id").get(getDocContentById);

module.exports = router;
