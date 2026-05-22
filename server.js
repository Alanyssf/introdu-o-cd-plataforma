const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Olá, estudantes! O Deploy Contínuo (CD) está funcionando perfeitamente na nossa plataforma!');
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});
8.	4. Abra o arquivo package.json que foi criado automaticamente. Encontre a seção "scripts" e adicione um script para simular um teste e outro para rodar o servidor, deixando assim:
"scripts": {
  "test": "echo \"Todos os testes passaram com sucesso!\" && exit 0",
  "start": "node server.js"
}
