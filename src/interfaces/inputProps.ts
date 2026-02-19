import type { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
}