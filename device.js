var mongoose = require("mongoose");

var deviceSchema = new mongoose.Schema({
    light1: {
        type: Number,
        required: true,
    },
    light2: {
        type: Number,
        required: true,
    },
    light3: {
        type: Number,
        required: true,
    },
    fan1: {
        type: Number,
        required: true,
    },
})

var device = mongoose.model('Device', deviceSchema);

module.exports = device;