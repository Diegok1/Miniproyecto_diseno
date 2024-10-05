import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hola, ¿en qué puedo ayudarte?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const apiKey = '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'; // Reemplaza TU_API_KEY con tu clave API de OpenAI

  const sendMessage = async (message) => {
    // Añadir mensaje del usuario a la lista
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);

    try {
      // Llamada a la API de OpenAI
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
        }),
      });

      const data = await response.json();

      // Añadir respuesta del bot a la lista
      const botMessage = data.choices[0].message.content;
      setMessages((prevMessages) => [...prevMessages, { text: botMessage, sender: 'bot' }]);

    } catch (error) {
      // Si hay un error, muestra un mensaje de error
      setMessages((prevMessages) => [...prevMessages, { text: 'Hubo un error al conectarse con la API.', sender: 'bot' }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div style={{ backgroundColor: '#2C2C2C', padding: '10px', borderRadius: '5px', color: 'white' }}>
      <div style={{ height: '200px', overflowY: 'scroll', padding: '10px', backgroundColor: '#1C1C1C', borderRadius: '5px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '10px', display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ 
            flexGrow: 1, 
            padding: '10px', 
            borderRadius: '3px', 
            backgroundColor: '#fff',  // Fondo blanco para mayor visibilidad
            color: '#000',            // Color de texto negro
            border: '1px solid #ccc', // Borde gris claro
          }}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit" style={{ marginLeft: '5px', padding: '5px 10px', backgroundColor: '#1abc9c', color: 'white', border: 'none', borderRadius: '3px' }}>Enviar</button>
      </form>
    </div>
  );
};

export default Chat;

