
import { useFormulario } from '../hooks/useFormulario';
import Input from './Input';

const FormularioContacto = () => {
  const { formData, enviado, esValido, handleInputChange, handleSubmit } = useFormulario();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-[40px] shadow-2xl w-full max-w-lg">
        
        <h1 className="text-5xl font-bold text-center text-gray-700 mb-10">
          Contact us
        </h1>

        {/* Mensaje de éxito condicional */}
        {enviado && (
          <div className="mb-6 p-4 bg-green-500 text-white text-center rounded-2xl animate-fade-in">
            ¡Gracias por tu mensaje! Carlos te comunicará pronto contigo.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            name="nombre" 
            type="text" 
            placeholder="NOMBRE" 
            value={formData.nombre} 
            onChange={handleInputChange} 
          />
          
          <Input 
            name="email" 
            type="email" 
            placeholder="EMAIL" 
            value={formData.email} 
            onChange={handleInputChange} 
          />
          
          <Input 
            name="mensaje" 
            type="textarea" 
            placeholder="MENSAJE" 
            value={formData.mensaje} 
            onChange={handleInputChange} 
          />

          <button
            type="submit"
            disabled={!esValido}
            className={`w-full py-4 rounded-full text-white font-bold text-lg uppercase transition-all duration-300 ${
              esValido 
                ? 'bg-purple-600 hover:bg-purple-700 shadow-lg cursor-pointer' 
                : 'bg-purple-300 cursor-not-allowed opacity-70'
            }`}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioContacto;