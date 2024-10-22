const {
  getDocContentByName: getDocContentByNameFromDB,
  getDocContentById: getDocContentByIdFromDB
} = require("../services/docService");

exports.getDocContentByName = async (req, res, next) => {
  const { docName } = req.params;
  const doc = await getDocContentByNameFromDB(docName);
  req.swaggerDoc = doc;
  next();
}

// Get Document by Id Handler
exports.getDocContentById = async (req, res, next) => {
  const { id } = req.params;
    const doc = await getDocContentByIdFromDB(id);
    req.swaggerDoc = doc;
    next();
};
