// src/components/Salvavidas.js

const Salvavidas = () => {
    const tiposSalvavidas = [
      {
        nombre: 'Chaleco salvavidas',
        descripcion: 'Ideal para la navegación y deportes acuáticos.',
      },
      {
        nombre: 'Aro salvavidas',
        descripcion: 'Utilizado en situaciones de emergencia en piscinas o barcos.',
      },
      {
        nombre: 'Dispositivo inflable',
        descripcion: 'Fácil de transportar, se infla en situaciones de emergencia.',
      },
    ];
  
    return (
      <section className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-4">Tipos de Salvavidas</h2>
        <ul className="space-y-4">
          {tiposSalvavidas.map((salvavida, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-semibold">{salvavida.nombre}</h3>
              <p>{salvavida.descripcion}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Salvavidas;
  