/**
 * export hub for both database and models
 */
const db = require('./db');

require('./model'); // export models

module.exports = db;


