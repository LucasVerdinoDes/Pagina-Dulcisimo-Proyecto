var express = require('express');
var router = express.Router();
var fotosModel = require('../../models/novedadesModel');
var util = require ('util');
var cloudinary = require ('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', function (req,res,next){
    res.send('admin/fotos',{
        layout: 'admin/layout',
        usuario:req.session.nombre
    });
});




module.exports = router;