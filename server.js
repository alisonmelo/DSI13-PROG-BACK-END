//libera variáveis de ambiente
require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');
const alunoRoutes = require('./routes/alunoRoutes');

//inicializar o express
const app = express();
//habilitar o express para receber JSON
app.use(express.json());
//conectar no banco de dados
conectarDB();
//usar as rotas de aluno
app.use('/alunos', alunoRoutes);
//Rota raiz do servidor
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo ao servidor de alunos!' });
});
//definir a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
