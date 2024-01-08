// En un componente o página
import axios from 'axios';

 

const mandar_texto_y_recibir_respuesta = async (texto) => {
    try {
        const response = await axios.post('http://34.171.96.247/book/searchByTFIDF', { texto });
        console.log(response.data);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    }

const recibir_informacion = async () => {
    try {
        const response = await axios.get('http://34.171.96.247/book/65998ad0faad9f6bb2bc5382');
        console.log(response.data);
    }
    catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

       
export {  mandar_texto_y_recibir_respuesta, recibir_informacion };