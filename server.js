/** External Library Imports **/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()


/** Internal Dependencies **/
/** Routes */
const routes = require('./routes/routes');
/** Middle Ware */
const { setCorsHeaders } = require('./middleware/cors_middleware');
/** Builtins */
const path = require('path');
/** Environment Variables */
const MONGODB_URI = process.env.URI;

/** Source Code **/
/** File Upload Storage Config */




/** Server Config */
const server = express();

/** Middleware */
// solve CORS ERROS ON THE SERVER NOT CLIENT, BY SETTING SPECIAL HEADERS ON ALL REPONSES
server.use(setCorsHeaders); // this should probably be the first middleware
/** Request Parsers */
server.use(bodyParser.json());

/** Routes **/
server.use('/app', routes);

/** Catch All 404 */
server.use('/', (req, res, next) => {
    res.status(404).json({
        message: 'resource not found'
    });
});

/** Genereal Error Handler */
server.use((error, req, res, next) => {
    console.log('[General Error Handlers]');
    console.log(error);
    console.log('[End of Error]');
    const statusCode = error.statusCode || 500;
    const message = error.message;
    res.status(statusCode).json({
        message: message
    });
});

/** Start Server **/
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
    server.listen(5090);
}).catch(err => {
    console.log(err);
});