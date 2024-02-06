const { Router } = require('express');
const { check} = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos');
const { mascotasPost, mascotasGet } = require('../controllers/mascota.controller');

const router = new Router();

router.get("/", mascotasGet);

router.post(
    "/",
    [
        check("nombreMascota", "El nombre no puede estar vacio").not().isEmpty(),
        check("edadMascota", "La edad no puede estar vacia").not().isEmpty(),
        check("razaMascota", "La raza no puede estar vacia").not().isEmpty(),
        check("colorMascota", "El color no puede estar vacio").not().isEmpty(),
        validarCampos,
    ], mascotasPost);


module.exports = router;