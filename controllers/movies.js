const { default: mongoose } = require('mongoose');
const Movie = require('../models/movie');
const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

const addMovie = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Movie.create({ name, link, owner })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new ValidationError('Переданы некорректные данные при добавлении фильма'));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Передан несуществующий id фильма');
      } else if (card.owner.toString() !== req.user._id.valueOf()) {
        throw new ForbiddenError('Отсутствуют права доступа для удаления данного фильма');
      }
      Movie.findByIdAndRemove(movieId)
        .then((removedMovie) => res.send(removedMovie))
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getMovies,
  addMovie,
  deleteMovie,
};
