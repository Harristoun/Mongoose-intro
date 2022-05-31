// подключаем mongoose
// const mongoose = require('mongoose')
// cоздаем схему к mongoose -----.Schema и обозначаем туда тип данных ------String Number Boolean и тд 
// const CategorySchema = mongoose.Schema({
//     name: String
// })
// после чего, мы cоздаем модель Саtegoris ------mongoose.model
// const Category = mongoose.model(CategorySchema, 'Category')
// module.exports = Category


const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: String,
    phone: String,
    age: Number,
})
const Student = mongoose.model('Student', studentSchema)
module.exports = Student;