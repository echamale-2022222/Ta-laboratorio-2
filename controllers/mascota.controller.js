const Mascota = require('../models/mascota');
const { response } = require('express');

const mascotasPost = async (req, res) => {
    const {animal, nombreMascota, edadMascota, razaMascota, colorMascota} = req.body;
    const mascota = new Mascota({animal, nombreMascota, edadMascota, razaMascota, colorMascota});

    await mascota.save();

    res.status(200).json({
        mascota
    });
}

const mascotasGet = async (req, res = response) => {
    const {limite, desde} = req.query;
    const query = {estadoMascota: true};

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

const getMascotaById = async (req, res) => {
    const {id} = req.params;
    const mascota = await Mascota.findOne({_id: id});
    
    res.status(200).json({
        mascota
    });
}

const putMascotas = async (req, res = response) => {
    const {id} = req.params;
    const {_id, ...resto} = req.body;

    const mascota = await Mascota.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: "Mascota actualizada exitosamente!!!",
        mascota
    });
}

const deleteMascotas = async (req, res) => {
    const {id} = req.params;
    const mascota = await Mascota.findByIdAndUpdate(id, {estadoMascota: false});

    res.status(200).json({
        msg: 'Mascota eliminada exitosamente',
        mascota
    })
}

module.exports = {
    mascotasPost,
    mascotasGet,
    getMascotaById,
    putMascotas,
    deleteMascotas
}