import { useState } from 'react';
import { cities } from '../data/cities';

type Props = { onSelect: (id: string) => void };

const CitySelect = ({ onSelect }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200">
      <h2 className="text-4xl font-extrabold text-green-800 mb-10 drop-shadow-sm">
        Обери місто
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {cities.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 
              ${
              selected === c.id
                ? 'ring-4 ring-emerald-600 scale-105'
                : 'hover:scale-105'
            }`}
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src={c.image}
              alt={c.name}
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />

            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            <div className="relative z-10 flex flex-col justify-end h-full p-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-inner">
                <h3 className="text-2xl font-bold text-gray-900">{c.name}</h3>
                <p className="text-sm text-gray-800">{c.caption}</p>
              </div>
            </div>

          </button>
        ))}
      </div>

      {selected && (
        <button
          onClick={() => {
            localStorage.setItem('selectedCity', selected);
            onSelect(selected);
          }}
          className="mt-12 inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-14 rounded-full shadow-xl text-lg transition-transform duration-200 hover:scale-105"
        >
          Продовжити
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default CitySelect;
