const express = require('express')
const app = express()
const port = 3000

app.get('/chitiet', (req, res) => {
    res.send('<h1>Chi tiet</h1>')
})

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})