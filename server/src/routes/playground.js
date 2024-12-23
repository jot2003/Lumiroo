const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler.middleware')
const validation = require('../middlewares/validation.middleware')
const playgroundValidationSchema = require('../validation/playground.validation')
const playgroundController = require('../controllers/playground.controller')

const router = express.Router()

router.get('/attractions', asyncHandler(playgroundController.getAttractions))
router.get('/areas', asyncHandler(playgroundController.getAllAreas))
router.get('/', validation.validationQuery(playgroundValidationSchema.getPlaygrounds), asyncHandler(playgroundController.getPlayground))
router.get('/filter', validation.validationQuery(playgroundValidationSchema.filterPlayground), asyncHandler(playgroundController.filterPlayground))

module.exports = router
