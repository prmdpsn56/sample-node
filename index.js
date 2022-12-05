const http = require('http');
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

const server = http.createServer();


app.get('/', async (req, res) => {
  
  console.log(req.headers['x-forwarded-for']); 
  res.status(200).send({
      message: 'mongo db is connected to the application'
  })
})

app.listen(8080);
