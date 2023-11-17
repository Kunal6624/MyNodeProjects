const express = require('express');
const router = express.Router();

const authenticationMiddleWare = require('../middleware/auth');

const {login, dashboard} = require('../controllers/main');

//login 
router.post('/login', login);

//dashboard
router.get('/dashboard', authenticationMiddleWare, dashboard );

module.exports = router;