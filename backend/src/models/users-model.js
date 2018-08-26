const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const user = new Schema(
  {
    email: { type: String, require: true, unique: true },
    name: { type: String, required: true },
    role: { type: String },
    languages: { type: [String] },
    questionsCanAsk: { type: Number },
    status: { type: String, default: 'new' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', user);
