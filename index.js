
const express = require("express");

const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json());

app.use(require("./routers/drinks.router"));


mongoose.connect("mongodb+srv://Harris:dasaev95@cluster0.nybsciz.mongodb.net/students?retryWrites=true&w=majority").then(() => {
    console.log('mongo conected');
}).catch(() => console.log('eror conect'))

app.listen(port, () => {
  console.log("Сервер запущен");
});