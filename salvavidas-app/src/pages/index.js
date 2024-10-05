import { useState } from 'react';
import Head from 'next/head';
import WeightInput from '../components/WeightInput';
import Recommendation from '../components/Recommendation';
import { calculateCartridges } from '../lib/selectLifeJacket';
import Salvavidas from '../components/Salvavidas';  // Importamos el componente Salvavidas
import Chat from '../components/ChatBot';  // Importamos el componente del chatbot

export default function Home() {
  const [cartridgeRecommendation, setCartridgeRecommendation] = useState(null);

  const handleWeightSubmit = (weight) => {
    const recommendation = calculateCartridges(parseInt(weight));
    setCartridgeRecommendation(recommendation);
  };

  return (
    <div>
      {/* Meta información de la página */}
      <Head>
        <title>Inflatable Rescue Devices</title>
        <meta name="description" content="Encuentra el salvavidas adecuado basado en tu peso." />
      </Head>

      {/* Banner de la página */}
      <div style={{
        backgroundImage: 'url("/images/banner playa calculadora.jpg")',
        height: '300px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad según sea necesario
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>Bienvenido a la Calculadora Salvavidas</h1>
          <p style={{ color: 'white', fontSize: '1.25rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>Encuentra la cantidad de aire adecuado para ti y tu familia</p>
        </div>
      </div>

      {/* Contenido principal: calculadora de cartuchos */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <p className="text-lg text-gray-700 mb-6">
          La elección adecuada de los cartuchos de CO2 es crucial para garantizar la seguridad en el agua.
          Utilizar la cantidad correcta de cartuchos según el peso asegura que el salvavidas pueda operar eficientemente en caso de emergencia.
        </p>
        <WeightInput onWeightSubmit={handleWeightSubmit} />
        <Recommendation recommendation={cartridgeRecommendation} />
      </div>

      {/* Sección de tipos de Salvavidas */}
      <main className="p-8">
        <Salvavidas />
      </main>

      {/* Footer con ChatBot */}
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>&copy; 2024 Salvavidas</p>

        {/* ChatBot */}
        <Chat />
      </footer>
    </div>
  );
}
