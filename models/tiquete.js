import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(mongoose);

// Los datos son: documento pasajero, nombre pasajero, placaVehiculo, origen y destino
const tiqueteSchema = new Schema({
    // Número de tiquete autoincrementable
    numeroTiquete: { 
        type: Number,
        unique: true
    },
    valor: {
        type: Number,
        required: true
    },
    impuesto: {
        type: Number,
        required: true,
        default: function() {
            return this.valor * 0.16;
        }
    },
    documentoPasajero: { 
        type: String, 
        required: true 
    },
    nombrePasajero: {
        type: String,
        required: true
    },
    placaVehiculo: {
        type: String,
        required: true
    },
    origen: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    }
});

// Plugin para autoincrementar el número de tiquete
tiqueteSchema.plugin(AutoIncrement, { inc_field: 'numeroTiquete' });
const Tiquete = mongoose.model('Tiquete', tiqueteSchema, 'tiquete');
export default Tiquete
