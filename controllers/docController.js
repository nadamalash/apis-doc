const {
  addDoc: addDocToDB,
  getAllDocNames: getAllDocsFromDB,
  getDocContentByName: getDocContentByNameFromDB,
  getDocContentById: getDocContentByIdFromDB,
} = require("../services/docService");

// Add Document Handler
exports.addDoc = async (req, res) => {
  const { docName, docContent } = req.body;

  try {
    const newDoc = await addDocToDB(docName, docContent);
    res.status(201).json(newDoc);
  } catch (err) {
    res.status(500).json({ message: "Error adding document", error: err });
  }
};

// Get All Documents Handler
exports.getDocs = async (req, res) => {
  try {
    const docs = await getAllDocsFromDB();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching documents", error: err });
  }
};

// Get Document by Name Handler
exports.getDocContentByName = async (req, res) => {
  const { docName } = req.params;
  try {
    const doc = await getDocContentByNameFromDB(docName);
    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ message: "Error fetching document", error: err });
  }
};

// Get Document by Id Handler
exports.getDocContentById = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await getDocContentByIdFromDB(id);
    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ message: "Error fetching document", error: err });
  }
};
