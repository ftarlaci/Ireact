var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Article = require('./models/Article.js');
var app = express();
var PORT = process.env.PORT || 3000;