import express from 'express';

const router = express.Router()

const users = [
    {
        "username": "raza",
        "email": "raza@raza.com"
    },
    {
        "username": "ali",
        "email": "ali@raza.com"
    },
    {
        "username": "hassan",
        "email": "hassan@raza.com"
    }
]

router.get("/", (req, res) => {
    res.json(users);
})

export default router;