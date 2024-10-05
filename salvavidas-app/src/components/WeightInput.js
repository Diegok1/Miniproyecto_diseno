// src/components/WeightInput.js

function WeightInput({ onWeightSubmit }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const weight = event.target.weight.value;
      onWeightSubmit(weight);
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
        <div className="flex flex-col space-y-2">
          <label htmlFor="weight" className="text-lg font-semibold">Ingresa tu peso en kg:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Obtener Recomendación
          </button>
        </div>
      </form>
    );
  }
  
  export default WeightInput;
  