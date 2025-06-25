require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/ai');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/ai-response', aiRoutes);

app.listen(port, () => {
  console.log(`BK Inc. AI API server running on port ${port}`);
});
