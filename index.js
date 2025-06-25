// express-ai-endpoint-bkinc
// Created by BK Inc.

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

app.post('/api/ai-response', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const simulatedResponse = `You said: ${prompt}`;
    res.json({ reply: simulatedResponse });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`BK Inc. AI API server running on port ${port}`);
});
