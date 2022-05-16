const express = require('express');

const bodyParser = require('body-parser');
const sequelize = require('./config/db.js');

const UserRoutes = require('./api/routes/user.js');


const app = new express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", UserRoutes);

app.use((req, res)=>{
    res.json({
        "error_message": 404
    })
})

sequelize.sync()
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(port, () => {
    console.log(`Server is Listening on Port ${port}`);
})
