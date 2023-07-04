const router = require('express').Router();
const moviesController = require('../controllers/movies');
const usersValidate = require('../middlewares/validate');

router.get('/', moviesController.getMovies);
router.post('/', usersValidate.validateCardCreate, moviesController.addMovie);
router.delete('/:movieId', usersValidate.validateCardId, moviesController.deleteMovie);

module.exports = router;
