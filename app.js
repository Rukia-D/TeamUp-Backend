const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth')

const port = 8006 || process.env.PORT;

app.use(express.json());

app.use(cors());

app.use('/api/v1/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});