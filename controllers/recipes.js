const express = require('express');
const recipeModel = require('../models/recipe');
const recipes = express();

// index
recipes.get('/', (req, res) => {
  let allRecipes = recipeModel.getAllRecipes();
  res.locals.allRecipes = allRecipes;
  res.render('recipes/index');
});

// new
recipes.get('/new', (req, res) => {
  res.render('recipes/new');
});

// show
recipes.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.locals.recipe = recipeModel.getRecipe(id);
  res.render('recipes/show');
});

// create
recipes.post('/', (req, res) => {
  let recipename = req.body.recipename;
  recipeModel.createRecipe({recipename: recipename});
  res.redirect('/recipes');
});

// edit
recipes.get('/:id/edit', (req, res) => {
  let id = parseInt(req.params.id);
  let recipe = recipeModel.getRecipe(id);
  res.locals.recipe = recipe;
  res.render('recipes/edit');
});

// update
recipes.put('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let recipename = req.body.recipename;
  recipeModel.updateRecipe(id, recipename);
  res.redirect('/recipes');
});

// destroy
recipes.delete('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  recipeModel.deleteRecipe(id);
  res.redirect('/recipes');
});

module.exports = recipes;
