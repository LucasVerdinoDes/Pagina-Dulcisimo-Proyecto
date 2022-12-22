const { text } = require('express');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var pool = require('./../models/bd');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('cat');//form cat.hbs
});


router.post('/', async (req, res, next) => {
    console.log(req.body);
    var nombrecat = req.body.nombrecat;
    var apellidocat = req.body.apellidocat;
    var emailcat = req.body.emailcat;
    var celularcat = req.body.celularcat;
    var colegiocat = req.body.colegiocat;
    var edadcat = req.body.edadcat;
    var gradocat = req.body.gradocat;
    var nombrecat2 = req.body.nombrecat2;
    var apellidocat2 = req.body.apellidocat2;
    var parentescocat = req.body.parentescocat;
    var barriocat = req.body.barriocat;
    var formFilecat = req.body.formFilecat;



    var objcat = {
        to: 'verdinolucas@gmail.com',
        subject: 'Inscripción Catequesis',
        html: "Informacion del menor ------ Nombre y apellido: " + nombrecat + " " + apellidocat + " --- Edad: " + edadcat + "  --- Colegio: " + colegiocat + "  --- Grado: " + gradocat + "  ------ Datos del adulto responsable ------- Nombre y Apellido: " + nombrecat2 + " " + apellidocat2 + "  --- Parentesco: " + parentescocat + "  --- Celular: " + celularcat + "  --- Barrio: " + barriocat + "  --- Email: " + emailcat + " Ficha adjunta: " + formFilecat,
        text: " Información del menor          " +
            " Nombre y apellido: " + nombrecat + " " + apellidocat +
            " Edad: " + edadcat +
            " Colegio: " + colegiocat +
            " Sala/grado: " + gradocat +
            "   Datos del adulto responsable " +
            " Nombre y Apellido: " + nombrecat2 + " " + apellidocat2 +
            " Parentesco: " + parentescocat +
            " Celular: " + celularcat +
            " Barrio: " + barriocat +
            " Email: " + emailcat +
            " Ficha adjunta: " + formFilecat,

    }
    var transportcat = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PASS,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    var info = await transportcat.sendMail(objcat);
    res.render('cat', {
        messagecat: 'Mensaje enviado correctamente'
    });

});


// var obj = {
//     nombre: 'req.boy.nombrecat',
//     apellido: req.body.apellidocat,
//     edad: req.body.edadcat,
//     colegio:  req.body.colegiocat,
//     grado: req.body.gradocat,
//     nomfamiliar: req.body.nombrecat2,
//     parentesco: req.body.parentescocat,
//     celular: req.body.celularcat,
//     email:  req.body.emailcat
// }

// pool.query('insert into catequesis set ?', [obj]).then(function (resultados) { console.log(resultados); });


// const agregarUsuario = (nombrecat=req.body.nombrecat, apellidocat=req.body.apellidocat, edadcat=req.body.edadcat, colegiocat, gradocat) => {
    
//     pool.query( "INSERT INTO catequesis (nombre, apellido, edad)" +
//         "VALUES ('"+nombrecat+"', '"+apellidocat+"', '"+edadcat+"')".then(function(resultados){
//             console.log(resultados);
//         }));
 
//     }








module.exports = router;
