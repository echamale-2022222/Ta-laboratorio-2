const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Mascota = require('../models/mascota');


const esRoleValido = async (role = '') => {
    const existeRol = await Role.findOne({role});
    if (!existeRol) {
        throw new Error(`El role: ${ role } no existe en la base de datos`);
    }
}

const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        throw new Error(`El correo_ ${correo} ya esta registrado`);
    }
}

const existeUsuarioById = async (id = '') => {
    const existeId = await Usuario.findOne({id});
    if (existeId) {
        throw new Error(`El usuario con el id ${ id } no existe`);
    }
}

const existeMascotaById = async (id = '') => {
    const existeIdMascota = await Mascota.findOne({id});
    if (existeIdMascota) {
        throw new Error(`La mascota con el id ${ id } no existe`);
    }
}

module.exports = {
    esRoleValido,
    existenteEmail,
    existeUsuarioById,
    existeMascotaById
}