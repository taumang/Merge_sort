const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://openai80.p.rapidapi.com/models',
  headers: {
    'X-RapidAPI-Key': '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',
    'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
  }
};

const getModels = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getModels
};
