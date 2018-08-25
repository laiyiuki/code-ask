const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const chatroom = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, require: true },
    instructorId: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('chatrooms', chatroom);
