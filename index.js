const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()


const port = process.env.PORT || 3001
const app = express()


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})


const UserModel = mongoose.model('comments', userSchema)

mongoose.connect(process.env.URL_MONGODB)


app.get('/users', async (req, res) => {
    try {
        await UserModel.find({ _id: "5a9427648b0beebeb69579f5", }).updateOne({ email: "blablabalbalba" })
        const user = await UserModel.find({ _id: "5a9427648b0beebeb69579f5", })
        res.send(user)
    }
    catch (err) {
        console.error(err, 'ошибка при получении пользователя')
    }
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})