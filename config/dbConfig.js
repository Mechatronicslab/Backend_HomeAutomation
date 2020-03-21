const mongoose = require('mongoose')
// const mongoURL = 'mongodb://detacare_event:dc_event098@dbmongo.server.pptik.id:27017/detacare_event?readPreference=secondary'
const mongoURL = 'mongodb://homeauto2:hom3auto2020!@dbmongo.server.pptik.id:27017/homeauto2'

exports.connectToDb = mongoose.connect(mongoURL,{
  useCreateIndex: true,
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(() => console.log('connect mongodb'))
.catch(err => console.log('failed to connect' + err))

// {"mac":"84:f3:eb:e3:a5:3e","value":"11100111"}