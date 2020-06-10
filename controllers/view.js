const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: 'Express' })
});

router.get('/user', function(req, res, next) {
    res.render('user', { layout: 'documents/user', name: 'paddy' })
});

router.get('/react', function(req, res, next) {
    res.render('react', { layout: 'documents/react', title: 'React' })
});

module.exports = router;