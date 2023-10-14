const express = require('express');
const mongoose = require('mongoose');
const studentsRouter = require('./routes/students.js');

mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.get('/students', studentsRouter.getAllStudents);
app.post('/students', studentsRouter.createStudent);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});