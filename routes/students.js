const express = require('express');
const router = express.Router();
const StudentsModel = require('../models/StudentsModel');

router.post('/', async (req, res) => {
  const student = new StudentsModel(req.body);
  await student.save();

  res.status(201).json({
    message: 'Student created successfully'
  });
});

module.exports = router;