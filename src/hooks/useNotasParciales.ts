import { useState, useMemo } from "react";
import type { Parciales, NombreParcial } from "../interfaces/parciales";

// 1. Sacamos las constantes del hook para que no se re-creen en cada render
const MAX_P1_P2 = 30;
const MAX_P3 = 40;
const MAX_TOTAL = 100;
const PASS_SCORE = 60;

export const useNotasParciales = () => {
  // 2. Solo guardamos los valores que el usuario puede cambiar
  const [parciales, setParciales] = useState({
    parcial1: "",
    parcial2: "",
    parcial3: "",
  });

  /**
   * Obtiene la nota máxima permitida.
   */
  const obtenerNotaParcialMaxima = (nombreParcial: NombreParcial): number => {
    return (nombreParcial === "parcial3") ? MAX_P3 : MAX_P1_P2;
  };

  /**
   * 3. Cálculo DERIVADO del total. 
   * Eliminamos useEffect y useCallback. useMemo es mucho más eficiente aquí.
   */
  const total = useMemo(() => {
    const p1 = Number(parciales.parcial1) || 0;
    const p2 = Number(parciales.parcial2) || 0;
    const p3 = Number(parciales.parcial3) || 0;
    return p1 + p2 + p3;
  }, [parciales]);

  /**
   * Actualiza la nota validando el rango.
   */
  const handleCambiarNota = (nombreParcial: NombreParcial, valor: string) => {
    // Permitir campo vacío para que el usuario pueda borrar
    if (valor === "") {
      setParciales((prev) => ({ ...prev, [nombreParcial]: "" }));
      return;
    }

    const numValue = Number(valor);
    const max = obtenerNotaParcialMaxima(nombreParcial);

    // Validaciones: solo números positivos dentro del rango máximo
    if (isNaN(numValue) || numValue < 0 || numValue > max) {
      return;
    }

    setParciales((prev) => ({
      ...prev,
      [nombreParcial]: valor,
    }));
  };

  return {
    // 4. Exponemos el objeto nota con el total calculado al vuelo
    nota: { ...parciales, total },
    handleCambiarNota,
    obtenerNotaParcialMaxima,
    MAX_TOTAL,
    PASS_SCORE,
  };
};