const express = require('express');
const router = express.Router();
//importar molde tabela aluno
const Aluno = require('../models/Alunos');

//Metodo post cadastrar novo aluno
router.post('/', async(req, res) =>{
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
router.get('/', async(req, res) =>{
    try{
       const listaDeAlunos = await Aluno.find();
       res.status(200).json(listaDeAlunos);
    }catch(error){
        res.status(500).json({
            mensagem: "erro ao buscar alunos",
            erro: error.message
        });
    }
});
    module.exports = router;
