// Importing express module
const express = require("express");
const app = express();

// const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const contestRoutes = require("./routes/contest");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
// const braintreeRoutes = require("./routes/braintree");
const orderRoutes = require("./routes/order");

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", contestRoutes);

// app.use("/api", braintreeRoutes);
app.use("/api", orderRoutes);

// Getting Request
app.get("/", (req, res) => {
  // Sending the response
  res.send("Hello World!");

  // Ending the response
  res.end();
});

// Establishing the port
const PORT = process.env.PORT || 5000;

// Executing the sever on given port number
app.listen(PORT, console.log(`Server started on port ${PORT}`));
