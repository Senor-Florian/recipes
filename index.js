const express = require('express');
const expressHandlebars = require('express-handlebars');
const methodOverride = require('method-override');
const recipeManager = express();
const recipes = require('./controllers/recipes');

const handlebarsOption = {defaultLayout: 'main'};
const handlebarsConfig = expressHandlebars(handlebarsOption);
recipeManager.engine('handlebars', handlebarsConfig);
recipeManager.set('view engine', 'handlebars');

let bodyParser = require('body-parser');
recipeManager.use(bodyParser.json());
recipeManager.use(bodyParser.urlencoded({ extended: false }));

// for css
recipeManager.use(express.static('public'));

recipeManager.use(methodOverride('_method'));

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

recipeManager.use(logger);
recipeManager.use('/recipes', recipes);

recipeManager.listen(8080);
