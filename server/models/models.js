const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
}, {timestamps: true, freezeTableName: true})


const Table = sequelize.define('table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true/*, allowNull: false*/},
    volume: {type: DataTypes.INTEGER/*, allowNull: false*/},
}, {timestamps: true, freezeTableName: true})

module.exports = {
    User,
    Table
}