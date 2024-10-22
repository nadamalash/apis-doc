const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1- Create Schema
const docSchema = new Schema({
  docName: String,
  docContent: Object,
});

// 2- Create Model
exports.DocModel = mongoose.model("Doc", docSchema);
