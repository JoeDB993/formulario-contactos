import { useState, useMemo } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { IFormData } from '../interfaces/IFormulario';

// 1. Constantes o funciones de ayuda fuera del hook
const initialForm: IFormData = {
  nombre: '',
  email: '',
  mensaje: ''
};

export const useFormulario = () => {
  const [values, setValues] = useState<IFormData>(initialForm);
  const [enviado, setEnviado] = useState(false);

  // 2. Cálculo DERIVADO de la validez usando useMemo
  const esValido = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      values.nombre.trim().length > 2 &&
      emailRegex.test(values.email) &&
      values.mensaje.trim().length > 10
    );
  }, [values]);

  /**
   * Maneja el cambio de cualquier input
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Simula el envío del formulario
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (esValido) {
      console.log('Enviando datos de Carlos:', values);
      setEnviado(true);
      setValues(initialForm); // Reset
      
      setTimeout(() => setEnviado(false), 4000);
    }
  };

  return {
    // Exponemos los valores y los estados
    formData: values,
    enviado,
    esValido,
    // Funciones
    handleInputChange,
    handleSubmit
  };
};