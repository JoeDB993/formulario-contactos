import type { InputProps} from "../interfaces/inputProps"

const Input: React.FC<InputProps> = ({label, maxPoints, value, name, onChange}) => {
  const isValid: boolean = value !== '' && Number(value) > maxPoints;

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg border-gray-100 transition duration-300">
      <label className="block text-lg font-bold text-gray-700 mb-2">
        {label}
      </label>

      <p className="text-sm text-gray-500 mb-3">
        Max: {maxPoints} pts
        </p>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        min={0}
        max={maxPoints}
        placeholder={`0 - ${maxPoints}`}
        className={`w-full p-3 rounded-lg border-2 text-3xl font-extrabold text-center font-mono transition duration-150 ${isValid ? 'border-red-500 text-red-500  focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50' : 'border-gray-300'}`}
      />
    </div>
  )

} 
export default Input;