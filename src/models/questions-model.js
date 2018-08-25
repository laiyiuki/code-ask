const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const question = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, require: true },
    instructorId: { type: Schema.Types.ObjectId },
    content: { type: String },
    image: { type: String },
    languages: { type: [String] },
    status: { type: String, default: 'new' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('questions', question);
