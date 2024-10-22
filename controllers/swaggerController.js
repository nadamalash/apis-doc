const {
  getDocContentByName: getDocContentByNameFromDB,
} = require("../services/docService");

exports.getDocContentByName = async (req, res, next) => {
  const { docName } = req.params;
  const doc = await getDocContentByNameFromDB(docName);
  req.swaggerDoc = doc;
  next();
}