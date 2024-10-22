const {
  addDoc: addDocToDB,
  getAllDocNames: getAllDocsFromDB,
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


