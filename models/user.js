const mongoose = require('mongoose');
const validator = require('validator');
const ValidationError = require('../errors/ValidationError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new ValidationError('Некорректный формат почты');
      }
    },
  },
  password: {
    type: String,
    required: true,
    select: false, // не возвращать из базы
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
});

module.exports = mongoose.model('user', userSchema);
