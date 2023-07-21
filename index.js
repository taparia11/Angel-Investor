const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5001

app.use(cors())
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api', require('./routes/start'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})