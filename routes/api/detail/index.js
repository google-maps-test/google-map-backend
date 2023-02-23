const router = require('express').Router()
const controller = require('./detail.controller')

router.get('/photo', controller.GetPhoto)
router.get('/:id', controller.GetDetail)

module.exports = router