const router = require('express').Router();
const moviesController = require('../controllers/movies');
const usersValidate = require('../middlewares/validate');

router.get('/', moviesController.getMovies);
router.post('/', usersValidate.validateAddMovie, moviesController.createMovie);
router.delete('/:movieId', usersValidate.validateMovieId, moviesController.deleteMovie);

module.exports = router;
