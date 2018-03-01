import compression from 'compression' // middleware di Express per attivare la compressione Gzip sul server.
import express from 'express'
import dotenv from 'dotenv' // crea un file .env per settare la configurazione
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import { PORT, IS_PROD, LOGGER } from './config/config'
import todos from './routes/todos'

// ========= .ENV =========
dotenv.config()

// ========= EXPRESS =========
const app = express()

// ========= COMPRESSION =========
app.use(compression())

// ========= Authorize CORS =========
app.use(cors())

// ========= PROTECT from common ATTACKS =========
app.use(helmet())

// ========= Parse incoming requests data =========
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ========= EXTERNAL ROUTE =========
app.use('/todos', todos)

// ========= ROUTE =========
app.get('/', function (req, res) {
  res.send('Home')
})

// ========= LISTEN PORT =========
app.listen(PORT, function () {
  console.log(`Server running on port ${PORT} ${IS_PROD ? '(PROD)' : '(DEV)'}.`)
})
