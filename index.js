const http = require('http');
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

const server = http.createServer();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  // define the settings of the below headers
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
  next();
})

app.get('/', async (req, res) => {
  
  console.log(req.headers['x-forwarded-for']); 
  res.status(200).send({
      message: 'mongo db is connected to the application'
  })
})

app.listen(9090);
