const express = require('express');
const { login } = require('./auth-controller');

const router = express.Router();

router.post('/login', login);

module.exports = (app) => {
  app.use('/auth', router);
};
