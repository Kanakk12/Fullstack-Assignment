const mongoose = require('mongoose');


// Define a schema for the Card model
const cardSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Card', cardSchema);
