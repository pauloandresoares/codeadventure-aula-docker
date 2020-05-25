var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/contact', function(req, res, next) {
  model.contact.findAll({})
    .then(contacts => res.json({
        error: false,
        data: contacts
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        msm_error: error
    }));
});

module.exports = router;
