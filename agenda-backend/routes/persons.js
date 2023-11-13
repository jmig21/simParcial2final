const express = require('express');
const router = express.Router();

// Implementa las rutas relacionadas con las personas

// Base URL: /persons

// Ruta para ingresar una nueva persona
router.post('/', (req, res) => {
    // Implementa la lógica para ingresar una nueva persona
    res.json({ message: 'Persona ingresada exitosamente' });
});

// Ruta para eliminar una persona
router.delete('/:personId', (req, res) => {
    // Implementa la lógica para eliminar una persona por ID
    res.json({ message: 'Persona eliminada exitosamente' });
});

// Otras rutas  

module.exports = router;
