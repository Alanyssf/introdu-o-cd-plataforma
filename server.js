const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Olá, estudantes! O Deploy Contínuo (CD) está funcionando perfeitamente na nossa plataforma!');
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});
