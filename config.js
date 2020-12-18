"use strict";

require("dotenv").config();
module.exports = {
  api: {
    port: process.env.PORT,
  },
  db: {
    mongo:{
      user: process.env.USER_MONGO,
      password: process.env.PWD_MONGO,
      host: process.env.HOST_MONGO,
      name: process.env.NAME_MONGO
    }
  },
};
