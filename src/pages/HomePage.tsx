import React, { useState } from 'react';
import { siteContent, PosterItem } from '../content/siteContent';
import { Logo } from '../components/Logo';
import { PosterModal } from '../components/PosterModal';
import { 
  Megaphone, 
  Signpost, 
  ShieldCheck, 
  ClipboardCheck, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle, 
  Factory, 
  Building2, 
  GraduationCap, 
  Cross, 
  Home, 
  Boxes, 
  Landmark, 
  Store,
  Calendar,
  Clock,
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenConsultationWithService 
}) => {
  const [selectedPoster, setSelectedPoster] = useState<PosterItem | null>(null);

  // Map icon strings to Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone': return <Megaphone className="w-6 h-6 text-[#62B5DA]" />;
      case 'Signpost': return <Signpost className="w-6 h-6 text-[#62B5DA]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#62B5DA]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-[#62B5DA]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#62B5DA]" />;
    }
  };

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory': return <Factory className="w-5 h-5 text-[#F4974C]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#F4974C]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#F4974C]" />;
      case 'Cross': return <Cross className="w-5 h-5 text-[#F4974C]" />;
      case 'Home': return <Home className="w-5 h-5 text-[#F4974C]" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-[#F4974C]" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-[#F4974C]" />;
      case 'Store': return <Store className="w-5 h-5 text-[#F4974C]" />;
      default: return <Building2 className="w-5 h-5 text-[#F4974C]" />;
    }
  };

  return (
    <div className="flex flex-col">
      {/* 
        SECTION 1: HERO SECTION 
        Navy-900 background with subtle sky-400 glow and the animated circular logo motif
      */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0F2C47] text-white overflow-hidden border-b border-[#1A456F]">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#336E95]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#F4974C]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left 7 Columns: Headline, Value Proposition, Action CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Unboxed Kicker Metadata */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#62B5DA] tracking-wide mb-4">
                <span>{siteContent.hero.kicker}</span>
                <span className="text-[#336E95]">·</span>
                <span>Ranchi HQ</span>
              </div>

              {/* Dominant Hero Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance mb-6">
                {siteContent.hero.headline}
              </h1>

              {/* Plain-English Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                {siteContent.hero.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact/');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-[#0F2C47] bg-[#F4974C] hover:bg-[#F0853F] active:bg-[#E57737] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#F4974C]/25 whitespace-nowrap"
                >
                  <span>{siteContent.hero.primaryCta}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#0F2C47]" />
                </a>

                <a
                  href="/services/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/services/');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-transparent hover:bg-[#1A456F] border border-[#336E95] hover:border-[#62B5DA] rounded-xl transition-all duration-200 whitespace-nowrap"
                >
                  <span>{siteContent.hero.secondaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#62B5DA]" />
                </a>
              </div>

              {/* Trust Signal */}
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#62B5DA] shrink-0" />
                <span>{siteContent.hero.trustNote}</span>
              </div>

            </div>

            {/* Right 5 Columns: Logo Mark & Dynamic Animated Motif */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 md:w-96 aspect-square flex items-center justify-center">
                
                {/* Thin animated ring/arc echoing the SMS logo */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-[#1A456F] border-dashed animate-[spin_60s_linear_infinite]"
                  aria-hidden="true" 
                />
                <div 
                  className="absolute inset-4 rounded-full border-2 border-t-[#F4974C] border-r-[#F4974C] border-b-transparent border-l-transparent animate-[spin_20s_ease-in-out_infinite]"
                  aria-hidden="true" 
                />

                {/* Restrained Card Enclosure with Logo */}
                <div className="relative z-10 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#1A456F]/80 to-[#0F2C47]/90 border border-[#336E95]/50 backdrop-blur-md shadow-2xl flex flex-col items-center text-center">
                  <Logo size="xl" isDarkTheme={true} showText={false} />
                  <div className="mt-4">
                    <span className="text-xs uppercase tracking-widest text-[#62B5DA] font-bold block">
                      Safety Management Solutions
                    </span>
                    <span className="text-xs text-slate-300 italic mt-1 block">
                      &ldquo;Safety starts with you.&rdquo;
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trust Row underneath Hero */}
          <div className="mt-16 pt-8 border-t border-[#1A456F]/60 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {siteContent.trustStrip.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-sm font-bold text-white mb-1">
                  {item.label}
                </span>
                <span className="text-xs text-slate-400 leading-snug">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        SECTION 2: SERVICES OVERVIEW
        Light "Mist" background rhythm with 4 distinct capability cards
      */}
      <section className="py-20 bg-[#F3F7FA] text-[#0B1B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#336E95] block mb-2">
              Our Core Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2C47] tracking-tight">
              Practical Workplace & Community Safety Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              We focus on visible, tangible safety measures tailored to the exact realities of your building, employees, and visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.servicesOverview.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#336E95]/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0F2C47] flex items-center justify-center mb-5">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2C47] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-2">
                  <a
                    href={service.slug}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(service.slug);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A456F] hover:text-[#F4974C] transition-colors"
                  >
                    <span>Learn more about service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        SECTION 3: WHY SMS (Differentiators)
        Dark Navy Section with 4 Practical Real-World Reasons
      */}
      <section className="py-20 bg-[#0F2C47] text-white border-t border-b border-[#1A456F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#62B5DA] block mb-2">
              The SMS Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {siteContent.whySms.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {siteContent.whySms.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.whySms.points.map((point, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#1A456F]/40 border border-[#336E95]/40 hover:border-[#62B5DA]/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0F2C47] border border-[#336E95] text-[#F4974C] text-sm font-bold flex items-center justify-center tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        SECTION 4: HOW WE WORK (4-Step Horizontal Timeline)
        Light "Mist" background rhythm: Assess -> Plan -> Implement -> Sustain
      */}
      <section className="py-20 bg-[#F3F7FA] text-[#0B1B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#336E95] block mb-2">
              Methodical Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2C47] tracking-tight">
              {siteContent.howWeWork.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {siteContent.howWeWork.lead}
            </p>
          </div>

          {/* 4-Step Process Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {siteContent.howWeWork.steps.map((step, idx) => (
              <div 
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative z-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#F4974C] tabular-nums">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#336E95] bg-[#F3F7FA] px-2.5 py-1 rounded">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2C47] mb-1">
                    {step.name}
                  </h3>
                  <div className="text-xs font-medium text-[#275079] mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        SECTION 5: AWARENESS SHOWCASE (Posters with Lightbox modal)
        Grid of posters that trigger preview on click
      */}
      <section className="py-20 bg-white text-[#0B1B2B] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#336E95] block mb-2">
                Visual Safety Communication
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2C47] tracking-tight">
                {siteContent.awarenessShowcase.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                {siteContent.awarenessShowcase.lead}
              </p>
            </div>

            <a
              href="/awareness-events/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/awareness-events/');
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1A456F] hover:text-[#F4974C] transition-colors shrink-0"
            >
              <span>View full poster catalog & gallery</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid of Posters with Click-to-Lightbox */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.awarenessShowcase.posters.map((poster) => (
              <div
                key={poster.id}
                onClick={() => setSelectedPoster(poster)}
                className="cursor-pointer group bg-[#F3F7FA] rounded-2xl p-5 border border-slate-200 hover:border-[#336E95] transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-[#1A456F]">{poster.category} Safety</span>
                    <span className="text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200 font-medium text-slate-600">
                      Preview Lightbox
                    </span>
                  </div>

                  {/* Thumbnail Poster Canvas */}
                  <div className="bg-[#0F2C47] text-white rounded-xl p-5 mb-4 border border-[#1A456F] group-hover:border-[#F4974C] transition-colors relative overflow-hidden">
                    <div className="text-[10px] font-bold text-[#F4974C] uppercase tracking-wider mb-2">
                      SMS POSTER SERIES
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#62B5DA] transition-colors mb-2">
                      {poster.title}
                    </h4>
                    <p className="text-xs text-slate-300 italic mb-3">
                      &ldquo;{poster.tagline}&rdquo;
                    </p>
                    <div className="text-[11px] text-slate-400 line-clamp-2">
                      {poster.summary}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-200/80">
                  <span className="text-slate-500">{poster.dimensions}</span>
                  <span className="font-bold text-[#1A456F] group-hover:text-[#F4974C] inline-flex items-center gap-1">
                    <span>Inspect details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        SECTION 6: EVENTS & WORKSHOPS SUMMARY
        Short description of drills, workshops, and community training with CTA
      */}
      <section className="py-20 bg-[#0F2C47] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#62B5DA] block mb-2">
              Hands-On Preparedness
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {siteContent.eventsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {siteContent.eventsSection.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.eventsSection.programs.map((program) => (
              <div
                key={program.id}
                className="bg-[#1A456F]/40 border border-[#336E95]/40 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#62B5DA] font-semibold uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#F4974C]" />
                    <span>{program.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {program.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{program.duration}</span>
                    <span className="text-slate-500">·</span>
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{program.targetGroup}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {program.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#336E95]/40 mt-2">
                  <a
                    href="/contact/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/contact/');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4974C] hover:text-[#F0853F]"
                  >
                    <span>Book this session for your premises</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        SECTION 7: WHO WE SERVE
        Clean industry cards
      */}
      <section className="py-20 bg-[#F3F7FA] text-[#0B1B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#336E95] block mb-2">
              Sectors & Premises
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C47] tracking-tight">
              Safety Solutions Tailored to Your Specific Facility
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every environment carries unique risks, foot traffic patterns, and evacuation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteContent.whoWeServe.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#336E95] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F2C47] flex items-center justify-center mb-3">
                  {getIndustryIcon(item.icon)}
                </div>
                <h3 className="text-sm font-bold text-[#0F2C47] mb-1">
                  {item.category}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        SECTION 8: HONEST TESTIMONIALS / PROOF STRIP PLACEHOLDER
        Zero fabricated claims. Built cleanly as requested with clear [placeholder] notice.
      */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-wider text-[#336E95] font-bold block mb-1">
              Client Experience & Case Notes
            </span>
            <p className="text-xs text-slate-500 italic leading-relaxed">
              {siteContent.testimonialsSection.placeholderNotice}
            </p>
          </div>
        </div>
      </section>

      {/* 
        SECTION 9: FINAL CTA BAND
        Navy gradient with sky-400 glow and orange CTA button
      */}
      <section className="py-20 bg-gradient-to-r from-[#0F2C47] via-[#1A456F] to-[#0F2C47] text-white relative overflow-hidden border-t border-[#1A456F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Ready to Make Your Workplace or School Safer?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Schedule a free on-site safety walkthrough in Ranchi or discuss emergency escape maps and safety equipment for your premises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#0F2C47] bg-[#F4974C] hover:bg-[#F0853F] active:bg-[#E57737] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-[#F4974C]/25"
            >
              <span>Book a Free Safety Consultation</span>
              <ArrowUpRight className="w-5 h-5 text-[#0F2C47]" />
            </a>

            <a
              href={siteContent.contact.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#1A456F] hover:bg-[#275079] border border-[#336E95] rounded-xl transition-all duration-200"
            >
              <span>Message on WhatsApp (+91 93347 01135)</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            Direct Line: <a href="tel:+919334701135" className="text-white hover:underline tabular-nums font-semibold">+91 93347 01135</a> · Walking Street, Ranchi
          </div>

        </div>
      </section>

      {/* Poster Lightbox Modal Component */}
      <PosterModal
        poster={selectedPoster}
        onClose={() => setSelectedPoster(null)}
        onEnquire={(posterTitle) => {
          if (onOpenConsultationWithService) {
            onOpenConsultationWithService(`Safety Posters: ${posterTitle}`);
          }
          onNavigate('/contact/');
        }}
      />
    </div>
  );
};
