/*
==================
CONFIG
==================
*/

// ========= LOGGER CONFIG =========
import log4js from 'log4js'
// ========= .ENV =========
import dotenv from 'dotenv'
dotenv.config()

log4js.configure({
  appenders: { log: { type: 'file', filename: 'logger.log' } },
  categories: { default: { appenders: ['log'], level: 'debug' } }
})

export const LOGGER = log4js.getLogger('log')

// logger.trace('Entering cheese testing')
// logger.debug('Got cheese.')
// logger.info('Cheese is Gouda.')
// logger.warn('Cheese is quite smelly.')
// logger.error('Cheese is too ripe!')
// logger.fatal('Cheese was breeding ground for listeria.')

// ========= PORT =========
// Se il processo di Node utilizzato per eseguire la tua applicazione ha una variabile
// d'ambiente process.env.PORT impostata (ad esempio quando fai il deploy su Heroku),
// utilizzarà il valore di questa variabile come porta.
export const PORT = process.env.PORT || 8080

// ========= IS_PROD =========
// Verifichiamo se siamo in produzione
export const IS_PROD = process.env.NODE_ENV === 'production'
