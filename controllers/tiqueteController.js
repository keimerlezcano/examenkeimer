// crear una api llamada tiquete
// que permita listar los tiquetes
// crear tiquete
// editar tiquete
// eliminar tiquete
// los datos son: documento pasajero, nombre pasajero,placaVehiculo,origen y destino

import Cuenta from '../models/tiquete.js'; // Importar el modelo de Cuenta

//que permita listar los tiquetes
export async function getTiquete(req, res) {
    try {
        const cuentas = await Cuenta.find(); // Buscar todos los tiquetes en la base de datos
        res.json(cuentas); // Enviar los tiquetes como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los tiquetes' }); // Manejo de errores
    }
}

// crear tiquete
export async function PostTiquete(req, res) {
    const newTiquete = new Cuenta(req.body); // Crear una nueva instancia de 'Cuenta' con los datos del cuerpo de la solicitud
    try {
        const savedTiquete = await newTiquete.save(); // Guardar el tiquete en la base de datos
        res.status(201).json(savedTiquete); // Enviar el tiquete creado como respuesta con un código de estado 201
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el tiquete' }); // Manejo de errores
    }
}

// editar tiquete
export async function PutTiquete(req, res) {
    try {
        const id = req.params.id; // Obtener el id del tiquete a editar
        const tiquete = await Cuenta.findByIdAndUpdate(id, req.body, { new: true });
        res.json(tiquete); // Enviar el tiquete editado como respuesta
    }
    catch(error){
        res.status(500).json({ message: 'Error al editar el tiquete' });
    }
}

// eliminar tiquete
export async function DeleteTiquete(req, res) {
    try {
        const id = req.params.id; // Obtener el id del tiquete a eliminar
        await Cuenta.findByIdAndDelete(id); // Eliminar el tiquete de la base de datos
        res.json({ message: 'Tiquete eliminado con éxito' });
    }
    catch(error){
        res.status(500).json({ message: 'Error al eliminar el tiquete' });
    }
}

