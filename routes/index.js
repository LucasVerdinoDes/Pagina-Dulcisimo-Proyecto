var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
/* GET home page. */
router.get('/', async function (req, res, next) {
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0, 5);

    
  res.render('index', { novedades });
});





module.exports = router;
