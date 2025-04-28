import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import commentRoutes from './src/routes/commentRoutes.js';
import recipeRoutes from './src/routes/recipeRoutes.js';
import { logger } from './src/middleware/logger.js';

const app = express();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views')); // ✅ Set correct views path

// Routes
app.use('/recipes', recipeRoutes);
app.use('/recipes', commentRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
