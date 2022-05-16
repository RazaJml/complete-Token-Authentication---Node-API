const { Sequelize } = require('sequelize');

// For Sqlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/db.sqlite3',
    logging: (...msg) => console.log(msg)
});

// For MySql Database connection

// const sequelize = new Sequelize(
//     "auth-db", 
//     'admin', 
//     'your_password', 
//     {
//         host: "127.0.0.0:3307", 
//         dialect: "mysql", 
//         operatorsAliases: false
//     }
// )

module.exports = sequelize;