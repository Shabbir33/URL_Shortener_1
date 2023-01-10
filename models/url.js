const mongoose = require("mongoose");
const shortID = require("shortid");


const urlSchema = new mongoose.Schema({
    fullURL: {
        type: String,
        required: true
    },
    smallURL: {
        type: String,
        required: true,
        default: shortID.generate
    },
    count: {
        type: Number,
        required: true,
        default: 0
    }
})

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;