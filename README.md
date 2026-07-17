# DSI13-PROG-BACK-END

API backend para gerenciamento de alunos desenvolvida com Node.js, Express e MongoDB.

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **npm** (gerenciador de pacotes do Node.js) - Geralmente vem com Node.js
- **MongoDB** - Você pode usar:
  - MongoDB local instalado
  - MongoDB Atlas (banco de dados em nuvem) - [Criar conta](https://www.mongodb.com/cloud/atlas)

## 🚀 Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/alisonmelo/DSI13-PROG-BACK-END.git
cd DSI13-PROG-BACK-END
```

### 2. Instalar dependências

```bash
npm install
```

Este comando instalará todas as dependências necessárias:
- **express** - Framework web para Node.js
- **mongoose** - ODM para MongoDB
- **dotenv** - Gerenciador de variáveis de ambiente

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
MONGO_URI=mongodb+srv://seu_usuario:sua_senha@seu_cluster.mongodb.net/seu_banco
PORT=3000
```

**Exemplos:**

#### Se estiver usando MongoDB Atlas:
```env
MONGO_URI=mongodb+srv://usuario:senha@cluster0.abc123.mongodb.net/alunos
PORT=3000
```

#### Se estiver usando MongoDB local:
```env
MONGO_URI=mongodb://localhost:27017/alunos
PORT=3000
```

### 4. Executar o servidor

```bash
node server.js
```

Você deve ver a mensagem:
```
MongoDB Conectado
Servidor rodando na porta 3000
```

## 📡 Endpoints da API

A API está disponível em `http://localhost:3000`

### Rota raiz
- **GET** `/` - Retorna mensagem de boas-vindas

### Rotas de Alunos
- **GET** `/alunos` - Listar todos os alunos
- **GET** `/alunos/:id` - Obter um aluno específico
- **POST** `/alunos` - Criar um novo aluno
- **PUT** `/alunos/:id` - Atualizar um aluno
- **DELETE** `/alunos/:id` - Deletar um aluno

## 🧪 Testando a API

Você pode testar os endpoints usando:

### Com cURL
```bash
curl http://localhost:3000
```

### Com Postman
1. Abra o [Postman](https://www.postman.com/)
2. Crie uma nova requisição
3. Configure o método HTTP e URL desejados
4. Envie a requisição

### Com Thunder Client (VS Code)
1. Instale a extensão Thunder Client
2. Crie uma nova requisição com a URL `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
DSI13-PROG-BACK-END/
├── server.js              # Arquivo principal do servidor
├── package.json           # Dependências do projeto
├── .env                   # Variáveis de ambiente (criar)
├── config/
│   └── db.js             # Configuração do MongoDB
├── models/
│   └── Alunos.js         # Schema do modelo de Alunos
└── routes/
    └── alunoRoutes.js    # Definição das rotas
```

## ⚠️ Troubleshooting

### "Module not found: express"
**Solução:** Execute `npm install` para instalar as dependências

### "Cannot connect to MongoDB"
**Solução:** 
- Verifique se a URI no arquivo `.env` está correta
- Certifique-se de que o MongoDB está rodando (se local)
- Se usar MongoDB Atlas, verifique se o IP está whitelist

### "PORT 3000 is already in use"
**Solução:** 
- Mude a porta no arquivo `.env`: `PORT=3001`
- Ou finalize o processo que está usando a porta

## 📝 Notas

- O servidor carrega automaticamente as variáveis do arquivo `.env`
- A conexão com MongoDB é testada ao iniciar o servidor
- Em caso de erro na conexão, o processo Node.js será encerrado automaticamente

## 📄 Licença

ISC

## 👤 Autor

Alison Melo