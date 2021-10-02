const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: { type: String, require: true },
    score: { type: Number, require: false, default: 0 },
    image: { type: String, required: false, default: null },
},{
    timestamps: true
});

module.exports = mongoose.model('Users', usersSchema);