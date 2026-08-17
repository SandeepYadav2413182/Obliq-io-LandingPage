import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: {
    value: string;
    isPositive: boolean;
    label: string;
  };
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-slate-700 shadow-xl group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-full pointer-events-none" />
      
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-extrabold text-white mt-2 tracking-tight group-hover:text-emerald-400 transition-colors">
            {value}
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {trend && (
        <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs">
          <span className={`inline-flex items-center font-bold px-1.5 py-0.5 rounded ${
            trend.isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
          }`}>
            {trend.isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
            {trend.value}
          </span>
          <span className="text-slate-500">{trend.label}</span>
        </div>
      )}
    </div>
  );
};
