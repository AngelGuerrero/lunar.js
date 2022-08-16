const express = require('express')
const router = express.Router()

const HomeController = require('../controllers/HomeController')
const homeController = new HomeController()

router.get('/', function (req, res, next) {
  return homeController.index(req, res)
})

module.exports = router
