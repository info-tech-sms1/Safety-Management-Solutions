import React from 'react';
import { Logo } from './Logo';
import { siteContent } from '../content/siteContent';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-[#0F2C47] text-white border-t border-[#1A456F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1A456F]/60">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block"
              aria-label="Safety Management Solutions Home"
            >
              <Logo size="md" isDarkTheme={true} showText={true} />
            </a>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-2">
              {siteContent.footer.description}
            </p>
            <div className="mt-2 text-xs font-semibold text-[#62B5DA] tracking-wide uppercase">
              Tagline: &ldquo;{siteContent.footer.tagline}&rdquo;
            </div>
            <div className="text-xs text-slate-400">
              Director: <span className="text-white font-medium">{siteContent.contact.director}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-[#62B5DA] uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#F4974C] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#62B5DA] uppercase">
              Ranchi Head Office & Contact
            </h3>
            
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F4974C] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteContent.contact.fullAddress}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F4974C] shrink-0" />
                <div>
                  <a 
                    href={`tel:${siteContent.contact.phone.replace(/\s+/g, '')}`} 
                    className="hover:text-white transition-colors tabular-nums font-medium"
                  >
                    {siteContent.contact.phone}
                  </a>
                  <span className="text-xs text-slate-400 ml-2">(Call / Inquiries)</span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#62B5DA] shrink-0" />
                <a 
                  href={siteContent.contact.whatsAppUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#F4974C] transition-colors font-medium"
                >
                  <span>Chat directly on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F4974C]" />
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F4974C] shrink-0" />
                <a 
                  href={`mailto:${siteContent.contact.email}`} 
                  className="hover:text-white transition-colors font-medium"
                >
                  {siteContent.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-2 p-3.5 bg-[#1A456F]/40 border border-[#336E95]/40 rounded-xl">
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Office Hours:</span> {siteContent.contact.businessHours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Aligned Practices */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left max-w-2xl">
            {siteContent.footer.legalNotice}
          </p>
          <div className="shrink-0 text-center md:text-right">
            {siteContent.footer.copyright}
          </div>
        </div>

      </div>
    </footer>
  );
};
