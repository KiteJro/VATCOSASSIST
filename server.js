
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const history = req.body.history || [];
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: history,
    });
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ reply: "Sorry, there was an error processing your request." });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
