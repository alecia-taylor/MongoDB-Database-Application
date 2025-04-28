import express from 'express';
import * as commentController from '../controllers/commentController.js';

const router = express.Router({ mergeParams: true });

router.post('/:recipeId/comments', commentController.create);

export default router;
