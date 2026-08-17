import React from 'react';

interface BadgeProps {
  status: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, children, className = '' }) => {
  const styles = {
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    error: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border tracking-wide shadow-sm ${styles[status]} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse ${
        status === 'success' ? 'bg-emerald-400' :
        status === 'warning' ? 'bg-amber-400' :
        status === 'error' ? 'bg-rose-400' : 'bg-blue-400'
      }`} />
      {children}
    </span>
  );
};
