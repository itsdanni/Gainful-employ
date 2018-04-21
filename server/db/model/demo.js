/**
 * data schema for a demo model
 */
const Sequelize = require('sequelize');
const db = require('../db');

const Demo = db.define('Demo', {
  name: {
    type: Sequelize.STRING //varchar(255)
  },
});

module.exports = Demo;
