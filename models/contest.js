const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const contestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 52,
    },
    mobile: {
      type: Number,
      required: true,
      maxlength: 10,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
      maxlength: 6,
    },
    contest_type: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    photo_name: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    contest_name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      // unique: true,
      maxlength: 32,
    },
    option1: {
      type: String,
      maxlength: 5,
    },
    option2: {
      type: String,
      maxlength: 5,
    },
    option3: {
      type: String,
      maxlength: 5,
    },
    option4: {
      type: String,
      maxlength: 5,
    },
    option5: {
      type: String,
      maxlength: 5,
    },
    option6: {
      type: String,
      maxlength: 5,
    },
    option7: {
      type: String,
      maxlength: 5,
    },
    option8: {
      type: String,
      maxlength: 5,
    },
    option9: {
      type: String,
      maxlength: 5,
    },
    option10: {
      type: String,
      maxlength: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contest", contestSchema);
