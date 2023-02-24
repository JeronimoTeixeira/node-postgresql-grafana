const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4100

const controllerObterProdutos = require('./controllers/obterProdutos')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/produtos', (request, response) => {
  controllerObterProdutos.obterProdutos(response)
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})