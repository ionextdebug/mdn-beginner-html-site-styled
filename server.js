const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/styles', express.static(path.join(__dirname, 'styles')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  console.info(`The app handling the request is: ${process.env.APP_NAME}`)
})

app.listen(port, () => {
  console.log(`Nginx simple example app. Port: ${process.env.APP_NAME}`)
})