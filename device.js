var mongoose = require("mongoose");

var deviceSchema = new mongoose.Schema({
    light: {
        type: Number,
        required: true,
    },
})

var device = mongoose.model('Device', deviceSchema);

module.exports = device;