const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 25 * 60 * 1000, // за 25 минут
  max: 200, // не более 200 запросов
  message: 'Слишком много запросов, пожалуйста, повторите попытку позже',
});

module.exports = { limiter };
