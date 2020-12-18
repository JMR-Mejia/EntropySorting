"use strict";

const { MongoClient } = require("mongodb");

const config = require("../config").db.mongo;

const mongoUrl = `mongodb+srv://${config.user}:${config.password}@${config.host}/${config.name}`;

let connection;

async function connectDB() {
  if (connection) return connection;

  try {
    let client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = client.db(config.name);
  } catch (e) {
    console.error("No connect", e);
  }

  return connection;
}

module.exports = connectDB;
