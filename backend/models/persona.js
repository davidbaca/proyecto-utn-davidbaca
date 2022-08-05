
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: {
        type: 'String',
        required: true,
    },
    plataforma:{
        type: 'String',
        required: true,
    },
    calificacion:{
        type: 'String',
        required: true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});

const Persona = mongoose.model('persona', schema);

module.exports = Persona;

