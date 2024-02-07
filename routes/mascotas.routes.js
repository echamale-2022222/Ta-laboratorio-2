const { Router } = require('express');
const { check} = require('express-validator')

const { mascotasPost, mascotasGet, getMascotaById, putMascotas, deleteMascotas } = require('../controllers/mascota.controller');
const { existeMascotaById } = require('../helpers/db-validators');

const router = new Router();

router.get("/", mascotasGet);

router.post(
    "/",
    [
        check("nombreMascota", "El nombre no puede estar vacio").not().isEmpty(),
        check("edadMascota", "La edad no puede estar vacia").not().isEmpty(),
        check("razaMascota", "La raza no puede estar vacia").not().isEmpty(),
        check("colorMascota", "El color no puede estar vacio").not().isEmpty(),
    ], mascotasPost);

router.get(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeMascotaById),
    ], getMascotaById);

router.put(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeMascotaById),
    ], putMascotas)

router.delete(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeMascotaById),
    ], deleteMascotas)


module.exports = router;