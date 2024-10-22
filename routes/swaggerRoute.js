const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const { getDocContentByName, getDocContentById } = require("../controllers/swaggerController");
router.use(
  "/name/:docName",
  getDocContentByName,
  swaggerUi.serveFiles(),
  swaggerUi.setup()
);

router.use(
  "/:id",
  getDocContentById,
  swaggerUi.serveFiles(),
  swaggerUi.setup()
);
module.exports = router;
