const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

CONSTANTS.NODE_ENV = process.env.NODE_ENV || "dev";
CONSTANTS.PORT = process.env.PORT || "3011";
CONSTANTS.DEBUG = process.env.DEBUG || "express:application";

CONSTANTS.jwt_encryption = process.env.JWT_ENCRYPTION || 'Yogie';
CONSTANTS.jwt_expiration = process.env.JWT_EXPIRATION || 63113904;


CONSTANTS.db_dialect = process.env.DB_DIALECT || 'mongo';
CONSTANTS.db_host = process.env.DB_HOST || '13.235.31.10';
CONSTANTS.db_port = process.env.DB_PORT || 27020;
CONSTANTS.db_name = process.env.DB_NAME || 'lynktrac';
CONSTANTS.db_password = process.env.DB_PASSWORD || 'db-password';


CONSTANTS.regex_coordinate = /^-?[0-9]{1,3}(?:\.[0-9]{1,16})?$/
CONSTANTS.regex_mobile = /^[0-9]{10}$/
CONSTANTS.regex_name = /^.*[a-zA-Z]+.*$/
CONSTANTS.regex_igm = /^[0-9]{7}?$/
CONSTANTS.regex_container = /^[a-zA-Z]{4}[0-9]{7}?$/
CONSTANTS.regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports = CONSTANTS;
