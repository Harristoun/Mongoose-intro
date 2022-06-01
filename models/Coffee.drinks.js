const mongoose = require('mongoose')
const DrinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    isEhereCaffeine: Boolean,
    howMany: Number,
    description: String
})
const Drink = mongoose.model('Drink', DrinkSchema)
module.exports = Drink;