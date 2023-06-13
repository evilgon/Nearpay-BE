const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

const route = require("./routes");

const app = express();
var corsOptions = {
  origin: "*",
};

// Cors setting
app.use(cors(corsOptions));
app.use(cors());
app.options("*", cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,"
  );
  next();
});

app.use(express.json());

app.use("/api/qstn/live/v1.0", route);

module.exports = app;
