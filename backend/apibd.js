const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
//const cors = require('cors');
//const sqlite = require('sqlite3').verbose();
const cadastros = [];

app.use(require('cors')());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json(cadastros);
});

app.post('/cadastro', (req, res, next) => {
    console.log('Cadastro recebido');
    //salva no banco de dados
    cadastros.push({
        nome: req.body.nome,
        idade: parseInt(req.body.idade),
        uf: req.body.uf,
        email: req.body.email,
        telefone: req.body.telefone
    });
    res.json({ message: "Tudo ok por aqui!", dados: cadastros });
    })

    app.listen(3001, () => console.log('Servidor rodando na porta 3001'));