const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controller");


const router = Router()

router.get('/drinks', drinksController.getAllDrinks);
router.get('/drinks/in-stock',drinksController.getAvailable);
router.get('/drinks/:id', drinksController.getDrinkById);
router.post('/drinks',drinksController.postDrink);
router.delete('/drinks/:id', drinksController.deleteDrink);
router.patch('/drinks/:id', drinksController.pathDrink)

module.exports = router