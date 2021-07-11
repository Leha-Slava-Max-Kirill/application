const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    },
}, {timestamps: true, freezeTableName: true})


const Table = sequelize.define('table', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    type: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    degree: {
        type: DataTypes.STRING
    },
    volume: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false, 
    freezeTableName: true
})

module.exports = {
    User,
    Table
}