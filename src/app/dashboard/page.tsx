'use client';

import React, { useState } from 'react';
import { Users, FileText, AlertTriangle, Briefcase } from 'lucide-react';
import { StatsCard } from '../../components/ui/StatsCard';
import { Badge } from '../../components/ui/Badge';
import { Dropdown } from '../../components/ui/Dropdown';

export default function MockDashboard() {
  const [financialYear, setFinancialYear] = useState('FY 2026-27');

  const pipelineFiles = [
    { client: 'Vanguard Logistics Pvt Ltd', task: 'GSTR-3B Filing', status: 'warning', text: 'Pending Verification', date: 'Aug 20' },
    { client: 'Rajesh Manufacturing Co.', task: 'TDS Quarter 2 Audit', status: 'error', text: 'Documents Missing', date: 'Aug 24' },
    { client: 'Alpha Tech Ventures', task: 'Income Tax Return (ITR-6)', status: 'success', text: 'Ready to File', date: 'Aug 18' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 via-white to-blue-100 text-slate-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Workspace Brand Header */}
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 pb-6 border-b-2 border-black">
          <div>
            <div className="inline-block font-mono text-xs font-black tracking-widest text-black uppercase border border-black px-2 py-0.5 bg-white mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              WORKSPACE
            </div>
            <h1 className="text-2xl font-black tracking-tight text-black uppercase font-mono">Sharma & Associates CA</h1>
            <p className="text-slate-600 text-xs font-semibold mt-1">Founding trial system overview dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <Dropdown 
              label="Select Timeline"
              options={['FY 2024-25', 'FY 2025-26', 'FY 2026-27']} 
              selected={financialYear} 
              onSelect={setFinancialYear} 
            />
          </div>
        </header>

        {/* Branded Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <StatsCard 
            title="Total Registered Clients" 
            value="42" 
            icon={Users} 
            trend={{ value: '+4 new', isPositive: true, label: 'this month' }} 
          />
          <StatsCard 
            title="Pending Tax Returns" 
            value="11" 
            icon={AlertTriangle} 
            trend={{ value: '-5 closed', isPositive: false, label: 'since yesterday' }} 
          />
          <StatsCard 
            title="AI Extracted Invoices" 
            value="1,248" 
            icon={FileText} 
            trend={{ value: '99.4%', isPositive: true, label: 'accuracy rate' }} 
          />
        </div>

        {/* Flat Design Interactive Pipeline Table */}
        <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2.5 mb-6">
            <Briefcase className="w-5 h-5 text-black" />
            <h2 className="text-md font-black uppercase font-mono tracking-tight text-black">Active Compliance Filing Pipeline</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-medium text-slate-700">
              <thead>
                <tr className="border-b-2 border-black text-black font-bold uppercase font-mono bg-slate-50">
                  <th className="py-3 px-4">Client Name</th>
                  <th className="py-3 px-4">Target Task</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {pipelineFiles.map((f, i) => (
                  <tr key={i} className="hover:bg-amber-50/40 transition-colors group">
                    <td className="py-4 px-4 font-black text-black font-mono">{f.client}</td>
                    <td className="py-4 px-4 font-semibold text-slate-600">{f.task}</td>
                    <td className="py-4 px-4">
                      <Badge status={f.status as any}>{f.text}</Badge>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-slate-900">{f.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
