var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('nec');//form nec.hbs
});

router.post('/', async (req, res, next) => {
    console.log(req.body);
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var tel = req.body.tel;
    var mensaje = req.body.mensaje;
  
  
    var obj = {
      to: 'verdinolucas@gmail.com',
      subject: 'contacto web',
      html: nombre + apellido + " se contacto a través de la web y quiere mas información a este correo: " + email + ". <br> Además hizo el siguiente comentario: " + mensaje +". <br> Su tel es:" + tel
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
