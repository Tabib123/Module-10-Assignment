const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
  roll: { type: String },
  class: { type: String },
});

const StudentsModel = mongoose.model('Students', StudentsSchema);

module.exports = StudentsModel;