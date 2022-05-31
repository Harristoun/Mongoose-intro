// создаем require обозначив ее -------express
const express = require("express");
// подключаем таким же способом  ------mongoose
const mongoose = require("mongoose");
// создаем  константу для express 
const app = express();
// создаем port
const port = 3000;

// подключение .json
app.use(express.json());
// присоединение файл router к inndex.js
app.use(require("./routes/students.route"));

// подключаем mongoose ------.then выводит правду, в случаи ошибки он выводит .catch
mongoose.connect("mongodb+srv://Harris:dasaev95@cluster0.nybsciz.mongodb.net/students?retryWrites=true&w=majority").then(() => {
    console.log('mongo conected');
}).catch(() => console.log('eror conect'))

app.listen(port, () => {
  console.log("Сервер запущен");
});
