//libera variáveis de ambiente
require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');
const alunoRoutes = require('./routes/alunoRoutes');
const  jwt  = require('jsonwebtoken');

//inicializar o express
const app = express();
app.set('json spaces', 2);
// const cors = require('cors');
// app.use(cors());

//habilitar o express para receber JSON
app.use(express.json());
//conectar no banco de dados
conectarDB();

//ROTA TEMPORARIA SO PARA MOSTRAR CRIAÇÃO DO TOKEN
app.post('/login', (req, res)=>{
    const payload = {id:1, role:'admin'};
    // gerar token
    const token = jwt.sign(payload, 
                            process.env.JWT_SECRET
                            , {expiresIn: '1h'});
    res.json({token});
})

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
