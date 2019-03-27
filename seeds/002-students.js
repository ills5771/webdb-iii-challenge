exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Ilya", cohort_id: 2 },
        { name: "Angelo", cohort_id: 3 },
        { name: "Logan", cohort_id: 2 }
      ]);
    });
};
