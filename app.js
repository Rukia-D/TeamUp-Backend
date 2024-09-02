const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const workspaceRoutes = require('./routes/workspace')
const boardRoutes = require('./routes/boards')
const cardRoutes = require('./routes/card')

const port = 8006 || process.env.PORT;

app.use(express.json());

app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/workspace', workspaceRoutes);
app.use('/api/v1/board', boardRoutes);
app.use('/api/v1/card', cardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});