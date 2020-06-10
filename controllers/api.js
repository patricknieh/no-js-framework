const express = require('express');
const router = express.Router();

const User = require('../models/user')
router.get('/user/add', async(req, res, next) => {
    let user = new User()
    user.name = 'paddy'
    user.password = '***'
    let record = await user.save()
    res.send(record)
});

module.exports = router;

