import recipes from '../data/recipes.js';
import comments from '../data/comments.js';

export function index(req, res) {
  const { difficulty } = req.query;
  const filtered = difficulty ? recipes.filter(r => r.difficulty === difficulty) : recipes;
  res.render('recipes/index', { recipes: filtered });
}

export function show(req, res) {
  const recipe = recipes.find(r => r.id == req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

  const recipeComments = comments.filter(c => c.recipeId == recipe.id);
  res.render('recipes/show', { recipe, comments: recipeComments });
}

export function create(req, res) {
  const { name, ingredients, steps, difficulty } = req.body;
  const newRecipe = {
    id: recipes.length + 1,
    name,
    ingredients: ingredients.split(',').map(i => i.trim()),
    steps: steps.split(',').map(s => s.trim()),
    difficulty
  };
  recipes.push(newRecipe);
  res.redirect('/recipes');
}

export function update(req, res) {
  const recipe = recipes.find(r => r.id == req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

  Object.assign(recipe, req.body);
  res.json(recipe);
}

export function destroy(req, res) {
  const index = recipes.findIndex(r => r.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });

  recipes.splice(index, 1);
  res.status(204).send();
}

export function newRecipeForm(req, res) {
  res.render('recipes/new');
}

