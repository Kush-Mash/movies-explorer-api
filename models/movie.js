const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const { ObjectId } = mongoose.Schema.Types;

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
    validate: isURL,
  },
  trailerLink: { // Ссылка на трейлер
    type: String,
    required: true,
    validate: isURL,
  },
  thumbnail: { // Постер-миниатюра
    type: String,
    required: true,
    validate: isURL,
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

module.exports = mongoose.model('user', userSchema);
