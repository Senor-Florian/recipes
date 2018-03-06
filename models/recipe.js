var recipeDB = [
  {id: 0, recipename: 'Pizza', description: 'This is a pizza.'},
  {id: 1, recipename: 'Lasagne', description: 'This is a lasagne.'},
  {id: 2, recipename: 'Calzone', description: 'This is a calzone.'}
];
var idCounter = 3;

const getAllRecipes = () => {
  return recipeDB;
};

const getRecipe = (id) => {
  return recipeDB.find((recipe) => {
    return recipe.id === id;
  });
};

const createRecipe = (params) => {
  let recipe = {id: idCounter, recipename: params.recipename, description: params.description};
  recipeDB.push(recipe);
  idCounter++;
  return recipe;
};

const updateRecipe = (id, newname, newdescription) => {
  let recipe = getRecipe(id);
  recipe.recipename = newname;
  recipe.description = newdescription;
  return recipe;
};

const deleteRecipe = (id) => {
  let recipe = getRecipe(id);
  let index = recipeDB.indexOf(recipe);
  recipeDB.splice(index, 1);
  return recipe;
};

module.exports = {
  getAllRecipes: getAllRecipes,
  getRecipe: getRecipe,
  createRecipe: createRecipe,
  updateRecipe: updateRecipe,
  deleteRecipe: deleteRecipe
};
