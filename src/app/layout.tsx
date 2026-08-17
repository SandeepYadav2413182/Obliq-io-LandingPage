import React from 'react';
import './globals.css';

export const metadata = {
  title: 'OBLIQ.io | AI Compliance Operations',
  description: 'AI-powered compliance operations for modern Indian CA firms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Injecting smooth antialiasing and high contrast text smoothing globally */}
      <body className="bg-gradient-to-r from-amber-100 via-white to-blue-100 text-slate-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
