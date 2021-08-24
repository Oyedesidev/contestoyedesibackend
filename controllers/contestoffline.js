const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const ContestOffline = require("../models/contestoffline");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    // check for all fields
    //   const { name, description, price, category, quantity, shipping } = fields;
    const { name, mobile, email, zipcode, contest_name, photo } = fields;

    if (!name || !mobile || !email || !zipcode || !contest_name || !photo) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let contestoffline = new ContestOffline(fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 10000) {
        return res.status(400).json({
          error: "Image should be less than 10mb in size",
        });
      }
      contestoffline.photo.data = fs.readFileSync(files.photo.path);
      contestoffline.photo.contentType = files.photo.type;
    }

    contestoffline.save((err, result) => {
      if (err) {
        console.log("PRODUCT CREATE ERROR ", err);
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};
