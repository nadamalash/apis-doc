const { DocModel } = require("../models/docModel");

// Add doc to DB
exports.addDoc = async (docName, docContent) => {
  const newDoc = new DocModel({ docName, docContent });
  return await newDoc.save();
};

// Get doc content by _id
exports.getDocContentById = async (id) => {
  const doc = await DocModel.findById(id, { docContent: 1 });
  return doc ? doc.docContent : null;
};

// Get all docs names from DB
exports.getAllDocNames = async () => {
  return await DocModel.find().select("docName _id");
};
