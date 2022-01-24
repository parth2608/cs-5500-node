import express from 'express';// load the express library
const app = express();// create an instance of the library

app.get('/hello', (req, res) =>// use express library to listen for URL pattern "/hello"
  res.send('Hello World!'));// respond with string "Hello World!"

const PORT = 4000;
app.listen(PORT);// listen to port 4000