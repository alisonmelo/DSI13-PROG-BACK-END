const mongoose = require('mongoose');

//definindo nossa tabela de dados no padração mongodb
// é tudo um objeto 0.0

const alunoSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    curso:{
        type:String,
        require:true
    },
    idade:{
        type: Number
    },
    matriculado:{
        type:Boolean,
        default:true
    }
});
module.exports = mongoose.model('Aluno', alunoSchema);