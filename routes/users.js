const router = require('express').Router();
const usersController = require('../controllers/users');
const usersValidate = require('../middlewares/validate');

router.get('/me', usersController.getCurrentUser);
router.patch('/me', usersValidate.validateUpdateUser, usersController.updateUser);

module.exports = router;
