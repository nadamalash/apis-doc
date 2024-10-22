const {
  getDocContentById: getDocContentByIdFromDB
} = require("../services/docService");


// Get Document by Id Handler
exports.getDocContentById = async (req, res, next) => {
  const { id } = req.params;
    const doc = await getDocContentByIdFromDB(id);
    req.swaggerDoc = doc;
    next();
};
