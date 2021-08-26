const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const refrencesSchema = new mongoose.Schema(
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
      unique: true,
      maxlength: 10,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    refname1: {
      type: String,
      trim: true,
      required: true,
      maxlength: 52,
    },
    mobile1: {
      type: Number,
      // trim: true,
      required: true,
      // unique: true,
      maxlength: 10,
    },
    refname2: {
      type: String,
      trim: true,
      required: true,
      maxlength: 52,
    },
    mobile2: {
      type: Number,
      // trim: true,
      required: true,
      // unique: true,
      maxlength: 10,
    },
    refname3: {
      type: String,
      trim: true,
      required: true,
      maxlength: 52,
    },
    mobile3: {
      type: Number,
      // trim: true,
      required: true,
      // unique: true,
      maxlength: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Refrence", refrencesSchema);
