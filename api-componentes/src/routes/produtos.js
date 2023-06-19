// src/routes/produtos.js

const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtoController.js');

// Rota para buscar todos os produtos
router.get('/produto', produtosController.buscarProdutos);

// Rota para buscar um produto por nome
router.get('/produto/:nome', produtosController.buscarProdutoPorNome);

// Rota para criar um novo produto
router.post('/produto', produtosController.criarProduto);

// Rota para atualizar um produto existente
router.put('/produto/:codigo_produto', produtosController.atualizarProduto);

// Rota para excluir um produto
router.delete('/produto/:codigo_produto', produtosController.excluirProduto);

module.exports = router;
