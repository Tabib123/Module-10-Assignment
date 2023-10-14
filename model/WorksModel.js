const mongoose = require('mongoose');

const WorksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  classNote: { type: String },
  description: { type: String },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'] },
  email: { type: String, required: true },
});

const WorksModel = mongoose.model('Works', WorksSchema);

module.exports = WorksModel;