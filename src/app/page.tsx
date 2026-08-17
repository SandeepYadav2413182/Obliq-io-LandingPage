'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Sparkles, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative flex flex-col justify-between selection:bg-amber-200">
      
      {/* 🧭 NAVIGATION HEADER: Featuring your custom pixel geometry branding */}
      <header className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center z-50">
        
        {/* LOGO CONTAINER: Mimics your uploaded pixel design file properties */}
        <div className="flex items-baseline select-none group cursor-pointer">
          <span className="font-mono text-2xl font-black tracking-[0.15em] text-black uppercase border-2 border-black px-2 py-0.5 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            OBLIQ
          </span>
          <span className="font-serif italic text-sm text-black font-semibold ml-1.5 tracking-tight">
            .io
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="secondary" className="text-xs py-2 px-4 border-2 border-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold text-black bg-white hover:bg-slate-50">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content Layout Block */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-center z-10 flex-1 flex flex-col justify-center items-center">
        <p className="text-xs font-bold text-slate-600 tracking-widest uppercase mb-4 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Meet the
        </p>
        
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight max-w-3xl leading-[1.2]">
          AI-powered compliance operations for Indian CA firms
        </h1>

        {/* Updated Search Input container component using the pixel boundary layout mapping rules */}
        <div className="mt-10 inline-flex items-center gap-3 bg-white border-2 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <Search className="w-4 h-4 RegalColor text-black stroke-[2.5]" />
          <span className="text-sm font-black tracking-[0.2em] text-black uppercase pr-1 font-mono">
            OBLIQ.io
          </span>
        </div>

        <p className="text-slate-600 text-sm sm:text-base mt-8 max-w-xl leading-relaxed font-medium">
          The smart retro-fitted operational framework engine designed to automate data capture routines and streamline CA filing pipelines completely.
        </p>

        <div className="mt-8">
          <Link href="/login?mode=signup">
            <Button className="bg-black hover:bg-slate-900 text-white rounded-none border-2 border-black px-8 py-3.5 text-sm font-black shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] gap-2 group">
              Launch Trial Workspace <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Feature Cards Grid matching your clean high-contrast card structures */}
        <div className="grid sm:grid-cols-3 gap-6 w-full max-w-5xl mt-24 text-left">
          <Card 
            icon={MessageSquare}
            title="WhatsApp Data Fetching"
            description="Isolate files, transaction slips, and manual text balances from client communication strings automatically."
          />
          <Card 
            icon={Clock}
            title="Strict Pipeline Tracking"
            description="Keep local operations tied closely to automated GSTR, ITR, and corporate compliance windows."
          />
          <Card 
            icon={Sparkles}
            title="Pixel-Perfect Extraction"
            description="Background parsing pipelines structured to group, clean, and record text entries from legacy spreadsheets."
          />
        </div>
      </main>

      <footer className="w-full text-center py-8 text-xs font-bold text-slate-500 border-t-2 border-black bg-white/40 backdrop-blur-sm mt-12">
        <p>© 2026 OBLIQ.io Hub Pipeline. Optimized Developer Task Deployment Instance.</p>
      </footer>
    </div>
  );
}
