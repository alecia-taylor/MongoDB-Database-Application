export function validateRecipeInput(req, res, next) {
    const { name, ingredients, steps } = req.body;
    if (!name || !ingredients || !steps) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
  }
  