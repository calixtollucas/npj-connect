const express = require('express');
const app = express();
const fs = require('fs/promises');
const filePath = './jsonData/clientes.json'


app.use(express.json())

const fileJson = fs.readFile(filePath, 'utf-8');

app.get('/api/get', (req, res)=>{
     fileJson
         .then(data =>{ //string
             res.send(data);
         })
         .catch(err => {return err})
})

app.post('/api/post', (req, res)=>{ // req tem um atributo body que possui um objeto no valor
    let usuarios;
    fileJson.then(data =>{
        let usuarios = JSON.parse(data);
        usuarios.users.push(req.body);
        
        fs.writeFile(filePath, JSON.stringify(usuarios))
        
    })
})

app.listen(8008, ()=>{
    console.log('running at port 8008')
})