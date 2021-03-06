// Importando Pacote
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// Declarar Caminho Estático
let staticPath = path.join(__dirname, "public");

// Inicializando Express.js
const app = express();

// Middlewares
app.use(express.static(staticPath));
app.use(express.json());

// Rotas
// Rota Home
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// Rota Inscrição
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.json('data recieved');
})

// Rota 404
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})


app.listen(3000, () => {
    console.log('Servidor iniciado na porta: 3000: http://localhost:3000');
})