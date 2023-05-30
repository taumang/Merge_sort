const express = require('express');
const { getModels } = require('./api/api.js');

const app = express();
const port = 3500;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get('/models', async (req, res) => {
  const models = await getModels();
  res.json(models);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + './index.js'); // Serve the HTML file
});

app.get('/user-input', (req, res) => {
  const userInput = req.query.input; // Retrieve user input from query parameter
  // Process the user input and generate models accordingly
  const models = generateModelsFromUserInput(userInput);
  function generateModelsFromUserInput(userInput) {
    // Replace this with your actual implementation
    return [
      { name: '', description: '' },
      { name: '', description: '' },
    ];
  }
  res.json(models);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});