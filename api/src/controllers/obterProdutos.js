const banco = require('../config/config');

const obterProdutos = (response) => {
    banco.pool.query('SELECT * FROM produto', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    })
};

module.exports = {
  obterProdutos: obterProdutos
}