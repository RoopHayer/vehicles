"use strict";

const express = require("express");
const cors = require("cors");
const authRouter = require("./auth/routes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  },
};
