const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  codeId: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  inventory:{
    type: Number,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  price:{
    type: Number,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
