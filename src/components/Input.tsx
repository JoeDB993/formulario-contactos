import type { InputProps } from '../interfaces/inputProps';

const Input = ({ name, type, placeholder, value, onChange }: InputProps) => {
  const baseStyles = `
    w-full px-5 py-3 border border-gray-400 
    text-gray-700 placeholder-gray-400 
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
    transition-colors
  `;

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className={`${baseStyles} rounded-[20px] resize-none`}
      />
    );
  }

  return (
    <input
      type={type} 
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyles} rounded-full`}
    />
  );
};

export default Input;