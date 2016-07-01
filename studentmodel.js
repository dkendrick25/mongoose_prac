var mongoose = require('mongoose');

var Student = mongoose.model('Student', {
  name: {type: String, required: true},
  links: {
    website: {type: String, required: true},
    github: {type: String, required: true},
  },
  gender: {type: String, enum: ['female', 'male'], required: true},
  projects: [String],
  points: Number
});

module.exports = Student;
