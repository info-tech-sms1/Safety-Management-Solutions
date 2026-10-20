import React from 'react';
import { ShieldAlert, ArrowLeft, Home, Phone } from 'lucide-react';
import { siteContent } from '../content/siteContent';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#0F2C47] text-white min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-[#1A456F]/40 border border-[#336E95]/40 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#0F2C47] border border-[#F4974C] flex items-center justify-center mx-auto text-[#F4974C]">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
          404
        </span>

        <h1 className="text-xl font-bold text-white">
          Emergency Exit Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The safety page you requested does not exist or has been relocated. Please return to the main hall or contact our Ranchi office for guidance.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F4974C] text-[#0F2C47] text-xs font-bold rounded-xl hover:bg-[#F0853F] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </a>

          <a
            href="tel:+919334701135"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-[#336E95] text-white text-xs font-semibold rounded-xl hover:bg-[#1A456F] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#62B5DA]" />
            <span className="tabular-nums">+91 93347 01135</span>
          </a>
        </div>
      </div>
    </div>
  );
};
