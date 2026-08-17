import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', isLoading, className = '', ...props }) => {
  const base = "inline-flex items-center justify-center font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] outline-none";
  const styles = {
    primary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10",
    secondary: "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm"
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} disabled={isLoading} {...props}>
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : children}
    </button>
  );
};
