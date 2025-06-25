const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

exports.getAIResponse = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const simulatedResponse = `You said: ${prompt}`;
    // Uncomment below to use real OpenAI API
    // const completion = await openai.createChatCompletion({
    //   model: 'gpt-3.5-turbo',
    //   messages: [{ role: 'user', content: prompt }]
    // });
    // const reply = completion.data.choices[0].message.content;
    res.json({ reply: simulatedResponse });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err.message });
  }
};
