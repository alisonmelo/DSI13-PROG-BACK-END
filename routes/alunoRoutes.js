const express = require('express');
const router = express.Router();
//importar molde tabela aluno
const Aluno = require('../models/Alunos');

//Metodo post cadastrar novo aluno
router.post('/', async (req, res) => {
    try {
        //Pega o JSON do que o usuario colocou no corpo da requisição
        const dadosDoAluno = req.body;
        //Salva os dados no banco com o mongoose
        const novoAluno = await Aluno.create(dadosDoAluno);
        //Devolve status 201
        res.status(201).json(novoAluno);
    } catch (error) {
        res.status(400).json({
            mensagem: "erro ao cadastrar",
            erro: error.message
        });
    }

});
router.get('/', async (req, res) => {
    try {
        const pagina = parseInt(req.query.pagina) || 1;
        const limite = parseInt(req.query.limite) || 5;
        // Pular skip de dados/paginas
        const pular = 0;
        //busco os dados        
        const listaDeAlunos = await Aluno.find()
            .skip(pular)// pula registros caso a gente configure
            .limit(limite);// pegar apenas o limite estabelecido 
        // conta a quantidade de alunos para um fuura req de front   
        const totalAlunos = await Aluno.countDocuments();
        // devolver a resposta em forma de pagfinas :D
        res.status(200).json({
            total_registos: totalAlunos,
            total_paginas: Math.ceil(totalAlunos / limite),
            pagina_atual: pagina,
            tamanho_pagina: limite,
            dados: listaDeAlunos
        });
    } catch (error) {
        res.status(500).json({
            mensagem: "erro ao buscar alunos",
            erro: error.message
        });
    }
});
module.exports = router;
