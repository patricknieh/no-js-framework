const express = require('express');
const router = express.Router();

router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Express' })
});

router.get('/user', function(req, res, next) {
    res.render('user', { layout: 'documents/user', name: 'paddy' })
});

module.exports = router;