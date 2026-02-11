import type { NombreParcial } from "./parciales";
export interface InputProps {
  label: string;
  maxPoints: number;
  value: number | string;
  name: NombreParcial;
  onChange: (name: NombreParcial, value: string) => void;
}