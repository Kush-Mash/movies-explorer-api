const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 25 * 60 * 1000, // не более 200 запросов за 25 минут
  max: 200,
});

module.exports = { limiter };
