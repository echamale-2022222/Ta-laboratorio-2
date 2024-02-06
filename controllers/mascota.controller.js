const Mascota = require('../models/mascota');
const { response } = require('express');

const mascotasPost = async (req, res) => {
    const {nombreMascota, edadMascota, razaMascota, colorMascota} = req.body;
    const mascota = new Mascota({nombreMascota, edadMascota, razaMascota, colorMascota});

    await mascota.save();

    res.status(200).json({
        mascota
    });
}

const mascotasGet = async (req, res = response) => {
    const {limite, desde} = req.query;
    const query = {estado: true};

    const [total, mascotas] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        mascotas
    })
}

module.exports = {
    mascotasPost,
    mascotasGet
}