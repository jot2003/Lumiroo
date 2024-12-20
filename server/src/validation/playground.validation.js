const Joi = require('joi')

const getPlaygrounds = Joi.object({
  limit: Joi.number().min(1).required(),
  page: Joi.number().min(1).required(),
})

const filterPlayground = Joi.object({
  area: Joi.string().optional(),
  attractions: Joi.array().items(Joi.string()).optional(),
  openingTime: Joi.number().optional(),
  closingTime: Joi.number().optional(),
  minAdmissionFee: Joi.number().min(0).required(),
  maxAdmissionFee: Joi.number().max(9999999999).required(),
  limit: Joi.number().min(1).required(),
  page: Joi.number().min(1).required(),
})

module.exports = {
  getPlaygrounds,
  filterPlayground,
}
