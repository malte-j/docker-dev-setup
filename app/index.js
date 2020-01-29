const express = require('express'),
      aws     = require("aws-sdk")

const app = express()
const port = 3000

let list = {}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/set', (req,res) => {
  res.send('si');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
