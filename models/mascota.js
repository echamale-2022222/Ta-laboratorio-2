const { Schema, model} = require('mongoose');

const MascotaSchema = Schema({
    animal:{
        type: String,
        require: [true, "El nombre del animal es obligatorio"]
    },
    nombreMascota:{
        type: String,
        require: [true, 'El nombre de la mascota es obligatorio']
    },
    edadMascota:{
        type: String,
        require: [true, "La edad de la mascota es obligatoria"]
    },
    razaMascota:{
        type: String,
        require: [true, "La raza de la mascota es obligatoria"]
    },
    colorMascota:{
        type: String,
        require: [true, "El color de la mascota es obligatorio"]
    },
    estadoMascota:{
        type: String,
        default: true
    },
});

module.exports = model('Mascota', MascotaSchema);