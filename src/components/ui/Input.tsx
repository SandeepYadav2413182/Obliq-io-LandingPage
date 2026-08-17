import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  error,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full text-left">
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          id={id}
          className={`w-full bg-slate-950 border rounded-xl py-3 pr-4 text-white text-sm outline-none transition-all duration-200
            ${Icon ? 'pl-11' : 'pl-4'} 
            ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' : 'border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20'} 
            ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-400 font-medium">{error}</p>
      )}
    </div>
  );
};
