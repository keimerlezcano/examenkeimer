import { Schema, model } from 'mongoose';

// los datos son: documento pasajero, nombre pasajero,placaVehiculo,origen y destino
const tiqueteSchema = new Schema({
    documentoPasajero: { 
        type: String, 
        required: true },
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
        destino:{
        type: String,
        required: true
        }
})

export default model('Tiquete',tiqueteSchema, 'tiquete')
