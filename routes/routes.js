/** External Library Imports **/
const router = require('express').Router();
const { body } = require('express-validator');

/** Internal Dependencies **/
const controllers = require('../controllers/controllers');

/** Source Code **/
/** /auth/signup */
router.get('/test', controllers.test);


/** Module Exports **/
module.exports = router;