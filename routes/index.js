var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require ('cloudinary').v2;
/* GET home page. */
router.get('/', async function (req, res, next) {

  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);

  novedades = novedades.map(novedad=>{
    if (novedad.img_id){
      const imagen = cloudinary.url(novedad.img_id,{
        width: 120,
        height: 85,
        crop: 'fill'
      });
      return{
       ...novedad,
        imagen
      }
    }else {
      return {
        ...novedad,
        imagen:'/images/zapato.jpg'
      }
    }
  });





  res.render('index', {novedades});
});



module.exports = router;
