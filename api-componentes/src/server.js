// src/server.js

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database.js');
const produtoRoutes = require('./routes/produtos.js');
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors())
// Rotas
app.use('/', produtoRoutes);

// Sincronizar modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });
