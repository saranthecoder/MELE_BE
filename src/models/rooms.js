const mongoose = require('mongoose');

const Room = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    WB: [Number],
    SB: [Number],
    EB: [Number]
  }, { timestamps: false });

const Rooms = mongoose.model('rooms', Room);

module.exports = Rooms;

