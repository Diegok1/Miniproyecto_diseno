const axios = require('axios');

const apiKey = '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';  // Reemplaza con tu API Key

async function testOpenAI() {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hola, ¿cómo estás?' }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Respuesta de OpenAI:', response.data);
  } catch (error) {
    console.error('Error al conectar con la API:', error.response ? error.response.data : error.message);
  }
}

testOpenAI();
