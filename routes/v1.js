const CONSTANTS = require("../constants");
const express = require("express");
const router = express.Router();
const passport = require('passport');
require('./../middleware/passport')(passport)
router.post('/jobs', auth(), function name()
{

});   

module.exports = router;

function auth() {
    return passport.authenticate('jwt', { session: false });
}