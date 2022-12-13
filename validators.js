// in validators.js
const { body, validationResult } = require('express-validator');

  const validateMovie = [
    body('title').isString().isLength({ max: 255 }).trim().escape(),
    body('director').isString().isLength({ max: 255 }).trim().escape(),
    body('year').isString().isLength({ max: 255 }).trim().escape(),
    body('color').isString().isLength({ max: 255 }).trim().escape(),
    body('duration').isInt().toInt(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      next();
    }

  ]
  
const validateUser = [
  body('email').isEmail().isLength({ max: 255 }).trim().escape(),
  body('firstname').isString().isLength({ max: 255 }).trim().escape(),
  body('lastname').isString().isLength({ max: 255 }).trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
]


module.exports = {
    validateMovie,
    validateUser,
  };