const express = require("express");
const helmet = require("helmet");

const cohortsRouter = require("./data/helpers/cohorts-router");

const studentsRouter = require("./data/helpers/students-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/cohorts", cohortsRouter);

server.use("/api/students", studentsRouter);

server.get("/", (req, res) => {
  res.send(`Welcome to Users-Posts API`);
});

module.exports = server;
