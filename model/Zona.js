const mongoose = require('mongoose')

const ZonaSchema = new mongoose.Schema({
    mac: { type: String },
    zona: [{
        zona_number: { type: String },
        zona_name: { type: String },
        nama: { type: String },
        nomor_zona: { type: String },
        jadwal: {
            id_jadwal: { type: String },
            nama: { type: String },
            nama_jadwal: { type: String },
            hour_start: { type: Number },
            minute_start: { type: Number },
            trigger: { type: String },
            repeat_interval: { type: Number },
            repeat_duration: { type: Number },
            repeat_daily: { type: Number }
        },
        Seconds_duration: { type: Number },
        foto: { type: String }
    }]
})

module.exports = mongoose.model('zona', ZonaSchema)