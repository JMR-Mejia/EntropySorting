"use strict";

const { ObjectID } = require('mongodb')

const connectDB = require("../../db/connect");
const errorHandler = require("../../network/errorHandler");

module.exports = {
  createVacant: async (root, { vacant }) => {
    try {
      let db = await connectDB();
      vacant = await db.collection("vacants").insertOne(vacant);
      vacant = await db.collection("vacants").findOne({_id: ObjectID(vacant.insertedId)});
      return vacant;
    } catch (e) {
      errorHandler(e);
    }
  },
};
