const Sequelize = require('sequelize');
const { sequelize } = require('../services/dborm');
const database = require('./dborm');

const Cliente = database.Sequelize.define('cliente',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER
    },
    endereco: Sequelize.STRING
})

module.exports = {Cliente}