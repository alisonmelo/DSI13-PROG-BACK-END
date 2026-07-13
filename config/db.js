const mongoose = require('mongoose');

//função assícrona para conectar banco de dados.
const conectarDB = async () => {
    try {
        //puxar a nossa senha secreta do arquivo .env
        const uri = process.env.MONGO_URI;
        //tentar conectar no DB
        await mongoose.Connect(uri);
        console.log("MongoDB Conectado");
    } catch (error) {
        console.log("erro ao conectar no MongoDB:", 
                    error.message);
        //Matar o processo node se conexão falhar!            
        process.exit(1);    
    }
};
module.exports = conectarDB;