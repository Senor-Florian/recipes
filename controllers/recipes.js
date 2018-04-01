const express = require('express');
// const recipeModel = require('../models/recipe');
const recipes = express();
const models = require('../models');

// index
recipes.get('/', (req, res) => {
  models.recipe.findAll().then(recipes => {
    res.locals.allRecipes = recipes;
    res.render('recipes/index');
  });
});

// new
recipes.get('/new', (req, res) => {
  res.render('recipes/new');
});

// show
recipes.get('/:id', (req, res) => {
  models.recipe.findById(req.params.id).then(recipe => {
    res.locals.recipe = recipe;
    res.render('recipes/show');
  });
});

// create
recipes.post('/', (req, res) => {
  models.recipe.create({name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    difficulty: req.body.difficulty,
    ingredients: req.body.ingredients,
    origin: req.body.origin,
    gluten_free: req.body.gluten_free,
    student_id: req.body.student_id }).then(recipe => {
    res.redirect('/recipes');
  });
});

// edit
recipes.get('/:id/edit', (req, res) => {
  models.recipe.findById(req.params.id).then(recipe => {
    res.locals.recipe = recipe;
    res.render('recipes/edit');
  });
});

// update
recipes.put('/:id', (req, res) => {
  models.recipe.update({name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    difficulty: req.body.difficulty,
    ingredients: req.body.ingredients,
    origin: req.body.origin,
    gluten_free: req.body.gluten_free }).then(recipe => {
    res.redirect('/recipes');
  });
});

// destroy
recipes.delete('/:id', (req, res) => {
  models.recipe.findById(req.params.id).then(recipe => {
    recipe.destroy().then(() => {
      res.redirect('/recipes');
    });
  });
});

module.exports = recipes;
