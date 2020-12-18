"use strict";

const { db } = require("../../config");
const connectDB = require("../../db/connect");
const errorHandler = require("../../network/errorHandler");

module.exports = {
  getVacants: async (root, { carrer, page }) => {
    try {
      let db = await connectDB();
      let vacants = await db
        .collection("vacants")
        .find({ cathegory: carrer }).skip((page*15)-15)
        .limit(15)
        .toArray()
      return vacants;
    } catch (e) {
      errorHandler(e);
    }
  },
};
