// Importando Pacote
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// Inicializando Express.js
const app = express();

// Rotas


// Rota Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta: 3000: http://localhost:3000/');
})