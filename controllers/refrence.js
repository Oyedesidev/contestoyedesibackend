// const formidable = require("formidable");
const _ = require("lodash");
// const fs = require("fs");
const Refrence = require("../models/refrence");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  const refrence = new Contest(req.body);

  refrence.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};
