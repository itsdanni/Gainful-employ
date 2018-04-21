/**
 * Creates a database connection
 */
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/your_database', {
  dialect: 'postgres',
  logging: false
})

module.exports = db;


