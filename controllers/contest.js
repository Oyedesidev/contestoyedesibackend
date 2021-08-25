// const formidable = require("formidable");
const _ = require("lodash");
// const fs = require("fs");
const Contest = require("../models/contest");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  const contest = new Contest(req.body);

  contest.save((err, data) => {
    if (err) {
      return res.status(400).json({
        // error: errorHandler(err),

        error: "You already Attempt Contest, Thank You for Visiting again.",
        
      });
    }
    res.json({ data });
  });
};
// exports.create = (req, res) => {
//   console.log("hello create");
//   let form = new formidable.IncomingForm();
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Image could not be uploaded",
//       });
//     }
//     // check for all fields
//     //   const { name, description, price, category, quantity, shipping } = fields;
//     const {
//       name,
//       mobile,
//       email,
//       zipcode,
//       contest_name,
//       contest_type,
//       photo_name,
//       option1,
//       option2,
//       option3,
//       option4,
//       option5,
//       option6,
//       option7,
//       option8,
//       option9,
//       option10,
//     } = fields;

//     if (
//       !name ||
//       !mobile ||
//       !email ||
//       !zipcode ||
//       !contest_type ||
//       !contest_name ||
//       !option1 ||
//       !option2 ||
//       !option3 ||
//       !option4 ||
//       !option5 ||
//       !option6 ||
//       !option7 ||
//       !option8 ||
//       !option9 ||
//       !option10
//     ) {
//       return res.status(400).json({
//         error: "All fields are required",
//       });
//     }

//     let contest = new Contest(fields);

//     // 1kb = 1000
//     // 1mb = 1000000

//     if (files.photo) {
//       // console.log("FILES PHOTO: ", files.photo);
//       if (files.photo.size > 10000) {
//         return res.status(400).json({
//           error: "Image should be less than 10mb in size",
//         });
//       }
//       contest.photo.data = fs.readFileSync(files.photo.path);
//       contest.photo.contentType = files.photo.type;
//     }

//     contest.save((err, result) => {
//       if (err) {
//         console.log("PRODUCT CREATE ERROR ", err);
//         return res.status(400).json({
//           error: errorHandler(err),
//         });
//       }
//       res.json(result);
//     });
//   });
// };
