const { text } = require('express');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('nec');//form nec.hbs
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
    var nombre2 = req.body.nombre2;
    var apellido2 = req.body.apellido2;
    var parentesco = req.body.parentesco;
    var barrio = req.body.barrio;
    var formFile = req.body.formFile;



    var obj = {
        to: 'verdinolucas@gmail.com',
        subject: 'Inscripción N.E.C',
        html: "Informacion del menor ------ Nombre y apellido: " + nombre + " " + apellido + " --- Edad: " + edad + "  --- Colegio: " + colegio + "  --- Sala/grado: " + grado + "  ------ Datos del adulto responsable ------- Nombre y Apellido: " + nombre2 + " " + apellido2 + "  --- Parentesco: " + parentesco + "  --- Celular: " + celular + "  --- Barrio: " + barrio + "  --- Email: " + email + " Ficha adjunta: " + formFile ,
        text: " Información del menor          " +
        " Nombre y apellido: " + nombre + " " + apellido +
            " Edad: " + edad +
            " Colegio: " + colegio +
            " Sala/grado: " + grado +
           "   Datos del adulto responsable " +
          " Nombre y Apellido: " + nombre2 + " " + apellido2 + 
                " Parentesco: " + parentesco + 
                " Celular: " + celular +
                " Barrio: " + barrio + 
                " Email: " + email +
                " Ficha adjunta: " + formFile ,

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
    res.render('nec', {
        message: 'Mensaje enviado correctamente'
    });

});
module.exports = router;
