const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = new Schema({
  mac: { type: String },
  value: { type: String },
  value: { type: String }

})
module.exports = mongoose.model('historys', HistorySchema)
