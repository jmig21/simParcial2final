const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/auth');
const personsRouter = require('./routes/persons');
const companiesRouter = require('./routes/companies');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rutas sin autenticación
app.post('/login', (req, res) => {
    // Lógica de autenticación, por ejemplo, verificar credenciales y generar token
    const token = jwt.sign({ user: 'username' }, 'secret_key');
    res.json({ token });
});

// Middleware de autenticación para rutas protegidas
app.use(authMiddleware);

// Rutas protegidas
app.use('/persons', personsRouter);
app.use('/companies', companiesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});