import express from "express";
const app = new express();

const port = 3000 || process.env.PORT ;

app.listen(port, () => {
    console.log(`Server is Listening on Port ${port}`);
})