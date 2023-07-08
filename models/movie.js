const mongoose = require('mongoose');
const validator = require('validator');

const { ObjectId } = mongoose.Schema.Types;
const ValidationError = require('../errors/ValidationError');

const userSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: { // Описание фильма
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isURL(value)) {
        throw new ValidationError('Некорректный адрес ссылки на постер к фильму');
      }
    },
  },
  trailerLink: { // Ссылка на трейлер
    type: String,
    required: true,
    validate(value) {
      if (!validator.isURL(value)) {
        throw new ValidationError('Некорректный адрес ссылки на трейлер фильма');
      }
    },
  },
  thumbnail: { // Постер-миниатюра
    type: String,
    required: true,
    validate(value) {
      if (!validator.isURL(value)) {
        throw new ValidationError('Некорректный адрес ссылки на миниатюру');
      }
    },
  },
  owner: {
    type: ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', userSchema);
