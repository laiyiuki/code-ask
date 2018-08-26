const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const message = new Schema(
  {
    senderId: { type: Schema.Types.ObjectId, require: true },
    text: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('questions', question);
