// src/components/Recommendation.js

function Recommendation({ recommendation }) {
    if (!recommendation) {
      return <p className="text-center">Ingresa tu peso para ver la recomendación.</p>;
    }
  
    // Función para formatear la recomendación en una sola línea
    const formatRecommendation = (cartridges) => {
      return cartridges.map(cartridge => `${cartridge.quantity} cartucho de ${cartridge.type}`).join(' y ');
    };
  
    return (
      <div className="mt-5 p-5 border rounded-lg bg-white shadow-lg max-w-md mx-auto">
        <h2 className="text-lg font-bold text-center mb-4">Recomendación de Cartuchos:</h2>
        <p className="text-gray-800 text-sm">{formatRecommendation(recommendation.cartridges)}</p>
      </div>
    );
  }
  
  export default Recommendation;
  