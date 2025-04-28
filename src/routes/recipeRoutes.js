import express from 'express';
import * as recipeController from '../controllers/recipeControllers.js';
import { validateRecipeInput } from '../middleware/validateInput.js';

const router = express.Router();

router.get('/', recipeController.index);
router.get('/new', recipeController.newRecipeForm); 
router.get('/:id', recipeController.show);
router.post('/', validateRecipeInput, recipeController.create);
router.patch('/:id', recipeController.update);
router.delete('/:id', recipeController.destroy);

export default router;
