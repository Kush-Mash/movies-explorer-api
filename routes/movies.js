const router = require('express').Router();
const cardsController = require('../controllers/cards');
const usersValidate = require('../middlewares/validate');

router.get('/', cardsController.getCards);
router.post('/', usersValidate.validateCardCreate, cardsController.createCard);
router.delete('/:movieId', usersValidate.validateCardId, cardsController.deleteCard);

module.exports = router;
