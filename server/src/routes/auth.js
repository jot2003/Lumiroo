const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler.middleware')
const validation = require('../middlewares/validation.middleware')
const authValidation = require('../validation/auth.validation')
const authController = require('../controllers/auth.controller')
const router = express.Router()

router.post('/sign-in', validation.validationBody(authValidation.signInSchema), asyncHandler(authController.signin))
router.post('/sign-up', validation.validationBody(authValidation.signUpSchema), asyncHandler(authController.signup))
router.post('/refresh-token', asyncHandler(authController.refreshToken))
router.post('/logout', asyncHandler(authController.logout ))

module.exports = router