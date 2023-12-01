const express = require('express');
const app = express();
const fs = require('fs/promises');
const filePath = './jsonData/clientes.json'


app.use(express.json())

app.get('/api/get', (req, res)=>{
     fs.readFile(filePath, 'utf-8')
         .then(data =>{ //string
             res.send(data);
         })
         .catch(err => {return err})
})

app.post('/api/post', (req, res)=>{
    
    console.log(req.body);
})

app.listen(8008, ()=>{
    console.log('running at port 8008')
})