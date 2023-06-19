// src/controllers/produtosController.js

const Produto = require('../models/produto.js');

// Buscar todos os produtos
async function buscarProdutos(req, res) {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os produtos.' });
  }
}

// Buscar produto por nome
async function buscarProdutoPorNome(req, res) {
  const { nome_produto } = req.query;
  try {
    const produtos = await Produto.findAll({
      where: {
        nome_produto: nome_produto,
      },
    });
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o produto.' });
  }
}

// Criar um novo produto
async function criarProduto(req, res) {
  const { nome_produto, desc_produto } = req.body;
  try {
    const produto = await Produto.create({
      nome_produto: nome_produto,
      desc_produto: desc_produto,
    });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto.' });
  }
}

// Atualizar um produto existente
async function atualizarProduto(req, res) {
  const { codigo_produto } = req.params;
  const { nome_produto, desc_produto } = req.body;
  // const { nome_produto, desc_produto, qtd_produto } = req.body;

  // if(qtd_produto > 1) {
  //   qtd_produto = 3
  // }



  try {
    await Produto.update(
      {
        nome_produto: nome_produto,
        desc_produto: desc_produto,
        // qtd_produto: qtd_produto
      },
      {
        where: {
          codigo_produto: codigo_produto,
        },
      }
    );
    res.json({ message: 'Produto atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto.' });
  }
}

// Excluir um produto
async function excluirProduto(req, res) {
  const { codigo_produto } = req.params;
  try {
    await Produto.destroy({
      where: {
        codigo_produto: codigo_produto,
      },
    });
    res.json({ message: 'Produto excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o produto.' });
  }
}

async function criarPedido(req,res){

}


module.exports = {
  buscarProdutos,
  buscarProdutoPorNome,
  criarProduto,
  atualizarProduto,
  excluirProduto,
};
