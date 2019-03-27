// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/cohorts.db3"
    },
    useNullAsDefault: true // needed for sqlite
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    }
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations"
  },
  seeds: {
    directory: "./seeds"
  }
};
