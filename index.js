const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/cohorts.db3"
  },
  useNullAsDefault: true // needed for sqlite
};

const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/cohorts", async (req, res) => {
  try {
    const cohorts = await db("cohorts");
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json(error);
  }
});
server.get("/api/cohorts/:id", async (req, res) => {
  try {
    const cohort = await db("cohorts")
      .where({ id: req.params.id })
      .first();
    if (cohort) {
      res.status(201).json(cohort);
    } else {
      res.status(404).json({ message: "That cohort does not exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
const errors = {
  "19": "Another cohort with that value exists"
};

server.post("/api/cohorts", async (req, res) => {
  try {
    const [id] = await db("cohorts").insert(req.body);
    const cohort = await db("cohorts")
      .where({ id })
      .first();
    res.status(201).json(cohort);
  } catch (error) {
    const message = errors[error.errno] || "We couldn't add the cohort";
    res.status(500).json({ message, error });
  }
});

const port = process.env.PORT || 4000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
