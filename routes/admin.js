const router = require('express').Router()
const adminController = require('../controller/admin')

router.post('/register', (req, res) => {
  adminController.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  adminController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router