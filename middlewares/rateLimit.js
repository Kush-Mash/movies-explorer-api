const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // не более ста запросов за 15 минут
  max: 100,
});

module.exports = limiter;
