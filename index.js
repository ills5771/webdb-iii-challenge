// const express = require("express");
// const helmet = require("helmet");
// const knex = require("knex");
// const db = require("./data/dbConfig");

const server = require("./server.js");

// const server = express();
const port = process.env.PORT || 4000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

// server.use(helmet());
// server.use(express.json());

// server.get("/api/cohorts", async (req, res) => {
//   try {
//     const cohorts = await db("cohorts");
//     res.status(200).json(cohorts);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// function getStudentCohort(cohortId) {
//   return db("students as s")
//     .join("cohorts as c", "c.id", "s.cohort_id")
//     .select("s.id", "s.name", "c.name")
//     .where("s.cohort_id", cohortId);
// }
// server.get("/api/cohorts/:id/students", async (req, res) => {
//   try {
//     const studCohorts = await getStudentCohort(req.params.id);
//     res.status(200).json(studCohorts);
//   } catch (error) {
//     res.status(500).json({ message: "We ran into an error" });
//   }
// });

// server.get("/api/students", async (req, res) => {
//   try {
//     const students = await db("students");
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// server.get("/api/cohorts/:id", async (req, res) => {
//   try {
//     const cohort = await db("cohorts")
//       .where({ id: req.params.id })
//       .first();
//     if (cohort) {
//       res.status(201).json(cohort);
//     } else {
//       res.status(404).json({ message: "That cohort does not exist" });
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// const errors = {
//   "19": "Another cohort with that value exists"
// };

// server.post("/api/cohorts", async (req, res) => {
//   try {
//     const [id] = await db("cohorts").insert(req.body);
//     const cohort = await db("cohorts")
//       .where({ id })
//       .first();
//     res.status(201).json(cohort);
//   } catch (error) {
//     const message = errors[error.errno] || "We couldn't add the cohort";
//     res.status(500).json({ message, error });
//   }
// });

// server.put("/api/cohorts/:id", async (req, res) => {
//   try {
//     const count = await db("cohorts")
//       .where({ id: req.params.id })
//       .update(req.body);

//     if (count > 0) {
//       const cohort = await db("cohorts")
//         .where({ id: req.params.id })
//         .first();
//       res.status(200).json(cohort);
//     } else {
//       res.status(404).json({ message: "That cohort wasn't found" });
//     }
//   } catch (error) {}
// });

// server.delete("/api/cohorts/:id", async (req, res) => {
//   try {
//     const count = await db("cohorts")
//       .where({ id: req.params.id })
//       .del();
//     if (count > 0) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: "That cohort wasn't found" });
//     }
//   } catch (error) {}
// });

// const port = process.env.PORT || 4000;
// server.listen(port, () =>
//   console.log(`\n** API running on http://localhost:${port} **\n`)
// );
