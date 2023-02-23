const router = require('express').Router()

const paths = ['/detail']

paths.forEach(path => router.use(path, require(`.${path}`)))

module.exports = router