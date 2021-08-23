const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const contestofflineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 52,
    },
    mobile: {
      type: Number,
      // trim: true,
      required: true,
      unique: true,
      maxlength: 10,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    zipcode: {
      type: Number,
      required: true,
      maxlength: 6,
    },
    contest_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    photo: {
      type: String,
      required: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContestOffline", contestofflineSchema);
