/** External Library Imports **/
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');

/** Internal Dependencies **/
const User = require('../models/userModel')
const { bubbleError, throwThenbubbleError } = require('../util/error_utils');

/** Builtins **/
const path = require('path');

/** Source Code **/
exports.test = (req, res, next) => {
    res.json({
        message: "Hello World"
    });
}


/** Module Exports **/
// module.exports = {

// };