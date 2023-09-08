const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")
const User = require('./models/User')
const bcrypt = require('bcryptjs')
app.use(cors())
app.use(express.json())

const salt = bcrypt.genSaltSync(10);

mongoose.connect('mongodb+srv://ankursingh91002:3SelcBguiOKtRbgY@mern-blog.0po4wnb.mongodb.net/?retryWrites=true&w=majority')

// 3SelcBguiOKtRbgY
// 
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        })
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e)
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username: username })
    console.log(userDoc);
    // res.json()
    bcrypt.compare(password, userDoc.password, function (err, result) {
        if(result){
            // Logged in, response with JWT
        }else{
            res.status(400).json("Wrong credentials")
        }
        // res.json(result)
    });
})

app.listen(4000, () => {
    console.log();
})