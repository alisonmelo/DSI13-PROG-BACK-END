const jwt =require('jsonwebtoken');

const authMiddleware =(req, res, next) =>{
    // Pega o token do cabeçalho da requisição
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    const partes = authHeader.split(' ');
    
    if (partes.length !== 2 || partes[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Token inválido' });
    }

    const token = partes[1];

    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}
module.exports = authMiddleware;