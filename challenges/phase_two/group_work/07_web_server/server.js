const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, express!')
  this.counter = 0
});

app.post('/counter', (req, res) => {
  this.counter += 1
})

app.get('/number', (req, res) => {
  res.send(`${this.counter}`)
})

app.delete('/counter', (req, res) => {
  this.counter = 0
})


console.log(`Server listening on localhost:${port}`);
app.listen(port);