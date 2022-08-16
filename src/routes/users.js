var express = require('express')
var router = express.Router()

const UsersController = require('../controllers/UsersController')
const usersController = new UsersController()

router.get('/', (req, res, next) => {
  return usersController.index(req, res)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({
      error: 'Missing id parameter'
    })
  }

  return usersController.show(req, res)
})

module.exports = router
