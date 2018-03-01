/*
==================
DATABASE
==================
*/

import mongoose from 'mongoose' // MongoDB
import Promise from 'bluebird' //
import dotenv from 'dotenv'

dotenv.config()

mongoose.Promise = Promise
// Connect DB
mongoose.connect(process.env.MONGO)
