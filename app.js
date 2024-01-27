const express = require('express');
const app = express();
const path = require('path');  // Adicionado para usar a função path.join
const port = 3000;



// Configuração do middleware para análise do corpo da requisição
app.use(express.json());

// Configuração do middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
