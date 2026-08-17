import React from 'react';

export const Card: React.FC<{ icon: any, title: string, description: string }> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
      <div className="w-9 h-9 border-2 border-black bg-amber-100 flex items-center justify-center text-black mb-4 font-mono font-bold">
        <Icon className="w-4 h-4" />
      </div>
      <h3 className="text-md font-black text-black uppercase font-mono tracking-tight mb-2">{title}</h3>
      <p className="text-slate-600 text-xs leading-relaxed font-medium">{description}</p>
    </div>
  );
};
