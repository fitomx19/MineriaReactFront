"use client"; // This is a client component 👈🏽

import { useState, useEffect } from 'react';
import { mandar_texto_y_recibir_respuesta , recibir_informacion} from './service.js';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState('');


  useEffect(() => {
    recibir_informacion();
  }
  , []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mandar_texto_y_recibir_respuesta({ searchText });
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('Error al obtener resultados:', error);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Mi SPA con Next.js</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Ingresa el texto de búsqueda:
        </label>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}  // Agregamos el manejador de cambio
          className="mt-1 p-2 border rounded w-full"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
          Buscar
        </button>
      </form>

      {result && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Resultado:</h2>
          <pre className="whitespace-pre-line">{result}</pre>
        </div>
      )}
    </div>
  );
}
