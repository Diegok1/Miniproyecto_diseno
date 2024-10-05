import axios from 'axios';

// Función para hacer la llamada a OpenAI
export const fetchChatGPTResponse = async (input) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Puedes cambiar el modelo si lo necesitas
        prompt: input,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer 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`, // Pon tu API key aquí
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error al obtener respuesta de ChatGPT:', error);
    return 'Hubo un error al conectarse con la API.';
  }
};
