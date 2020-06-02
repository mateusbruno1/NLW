import express from 'express';

const app = express();

app.get('/',(req,res)=>{
  res.json({err:"testes de execução"})
})

app.listen(3333);

