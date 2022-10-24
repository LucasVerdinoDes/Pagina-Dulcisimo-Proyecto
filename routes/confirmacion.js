const { text } = require('express');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('confirmacion');//confirmacion.hbs
});


router.post('/', async (req, res, next) => {
    console.log(req.body);
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var celular = req.body.celular;
    var colegio = req.body.colegio;
    var edad = req.body.edad;
    var grado = req.body.grado;
    var parentesco = req.body.parentesco;
    var barrio = req.body.barrio;
    var formFile = req.body.formFile;



    var obj = {
        to: 'verdinolucas@gmail.com',
        subject: 'Inscripción Confirmación',
        html: " Nombre y apellido: " + nombre + " " + apellido + " --- Edad: " + edad + "  --- Colegio: " + colegio + "  --- Año: " + grado + "  --- Celular: " + celular + "  --- Barrio: " + barrio + "  --- Email: " + email ,
        text:" Nombre y apellido: " + nombre + " " + apellido +
            " Edad: " + edad +
            " Colegio: " + colegio +
            " Año: " + grado +
                " Celular: " + celular +
                " Barrio: " + barrio + 
                " Email: " + email ,
                

    }
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PASS,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    var info = await transport.sendMail(obj);
    res.render('confirmacion', {
        message: 'Mensaje enviado correctamente'
    });

});

module.exports = router;
