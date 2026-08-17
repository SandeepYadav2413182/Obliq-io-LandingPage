'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  label?: string;
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {label && <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between gap-x-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all outline-none min-w-[140px]"
      >
        {selected}
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 min-w-[160px] origin-top-right rounded-xl bg-slate-900 border border-slate-800 p-1.5 shadow-2xl focus:outline-none animate-in fade-in slide-in-from-top-1 duration-100">
          <div className="py-0.5 space-y-0.5">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onSelect(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  opt === selected ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
