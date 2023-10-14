const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  status: { type: Number, enum: [0, 1], default: 0 },
});

const OTPModel = mongoose.model('OTPs', OTPSchema);

module.exports = OTPModel;