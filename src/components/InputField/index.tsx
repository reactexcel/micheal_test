import Avtar from "../Avtar";

interface inputprops {
  label?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  onChange: (e) => void;
}

export default function InputField({
  label,
  placeholder,
  icon,
  value,
  onChange,
}: inputprops) {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-lg shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Avtar src={icon} />
        </div>
        <input
          type="text"
          name="text"
          value={value}
          className="block w-full rounded-lg border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
