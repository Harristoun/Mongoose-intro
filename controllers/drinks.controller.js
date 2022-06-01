const Drink = require("../models/Coffee.drinks");

module.exports.drinksController = {
  getAllDrinks: (req, res) => {
    Drink.find().then((data) => {
      res.json(data);
    });
  },

  getAvailable: (req, res) => {
    Drink.find({
      inStock: true,
    }).then(() => {
      res.json("список всех напитков, которые есть в наличии");
    });
  },
  getDrinkById: (req, res) => {
    Drink.findById().then(() => {
      res.json("Вывести конкретный напиток");
    });
  },

  postDrink: (req, res) => {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      isEhereCaffeine: req.body.inStock,
      howMany: req.body.howMany,
      description: req.body.description,
    }).then(() => {
      res.json("Напиток добавлен");
    });
  },

  deleteDrink: (req, res) => {
    Drink.findByIdAndRemove(req.params.id).then(() => {
      res.json("Напиток удален");
    });
  },

  pathDrink: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      isEhereCaffeine: req.body.isEhereCaffeine,
      howMany: req.body.howMany,
      description: req.body.description,
    }).then((data) => {
      res.json(data);
    });
  },
};