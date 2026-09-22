const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation failed',
      details: Object.values(error.errors).map((item) => item.message)
    });
  }

  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
