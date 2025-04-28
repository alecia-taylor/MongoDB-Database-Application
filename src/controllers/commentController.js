import comments from '../data/comments.js';

export function create(req, res) {
  const { content } = req.body;
  const recipeId = parseInt(req.params.recipeId);
  
  const newComment = {
    id: comments.length + 1,
    recipeId,
    content,
    timestamp: new Date()
  };

  comments.push(newComment);
  res.redirect(`/recipes/${recipeId}`);
}
