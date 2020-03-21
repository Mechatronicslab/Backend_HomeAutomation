const mongoose = require('mongoose')
const Schema = mongoose.Schema

const histori_jadwalSchema = new Schema({
  mac: { type: String },
  value: { type: String },
  value: { type: String }

})
module.exports = mongoose.model('histori_jadwal', histori_jadwalSchema)
