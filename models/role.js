const { Schema, model} = require('mongoose');

const RoleSchema = Schema ({
    role:{
        type: String,
        require: [true, 'El rol es obligario']
    }
});

module.exports = model('Role', RoleSchema);