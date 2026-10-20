import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent, PosterItem } from '../content/siteContent';
import { HeroFeaturePanel } from '../components/HeroFeaturePanel';
import { PosterModal } from '../components/PosterModal';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageSquare,
  Factory,
  GraduationCap,
  Building2,
  Cross,
  Home,
  Boxes,
  Landmark,
  Shield,
  Layers,
  Sparkles,
  ChevronRight,
  Compass,
  HardHat
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
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll spy: smoothly highlight active step as the user scrolls through the 4 cards
  useEffect(() => {
    const handleScrollSpy = () => {
      const windowHeight = window.innerHeight;
      const targetLine = windowHeight * 0.42;

      let closestIndex = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - targetLine);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveStep((prev) => (prev !== closestIndex ? closestIndex : prev));
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    const targetEl = stepRefs.current[index];
    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      const targetScroll = window.scrollY + rect.top - 120;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const handleEnquireService = (serviceTitle: string) => {
    if (onOpenConsultationWithService) {
      onOpenConsultationWithService(serviceTitle);
    }
    onNavigate('/contact/');
  };

  return (
    <div className="flex flex-col bg-[#0F2C47] text-white">
      
      {/* 
        ========================================================================
        1. FULL-VIEWPORT HERO SECTION (Apple / Stripe Polish)
        - Very large headline: fluid 56px-100px
        - Colossal off-canvas SVG ring and orange arc drawing itself on load
        - Large photography with navy duotone overlay
        - Single magnetic orange CTA button
        ========================================================================
      */}
      <section className="relative overflow-hidden bg-[#0F2C47] border-b border-[#1A456F] pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-14 md:pb-16">
        {/* Ambient Radial Sky Highlight */}
        <div 
          className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#336E95]/25 rounded-full blur-[140px] pointer-events-none" 
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left 7 Columns: Headline, Value Proposition, Action CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Editorial Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A456F]/60 border border-[#336E95]/40 backdrop-blur-md mb-4 sm:mb-5">
                <span className="w-2 h-2 rounded-full bg-[#F4974C]" />
                <span className="text-[13px] font-semibold text-[#62B5DA] tracking-wide">
                  {siteContent.hero.kicker}
                </span>
              </div>

              {/* Fluid Display Headline: Responsive, authoritative, visible above the fold */}
              <h1 className="text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] xl:text-[4.5rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance mb-4 sm:mb-5">
                Practical Safety Solutions for Workplaces & Facilities.
              </h1>

              {/* High-Legibility Body Prose */}
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-slate-300 leading-relaxed max-w-2xl mb-6 sm:mb-8">
                {siteContent.hero.subheadline}
              </p>

              {/* Primary CTA in Orange & Secondary Navigation Link */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact/');
                  }}
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 text-[15px] sm:text-[16px] font-bold text-[#0F2C47] bg-[#F4974C] hover:bg-[#F0853F] active:bg-[#E57737] rounded-xl shadow-xl hover:shadow-2xl hover:shadow-[#F4974C]/30 transition-all duration-200 cursor-pointer"
                >
                  <span>{siteContent.hero.primaryCta}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#0F2C47] shrink-0" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 text-[15px] font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>Explore Capabilities Below</span>
                  <ChevronRight className="w-4 h-4 text-[#62B5DA]" />
                </a>
              </div>

              {/* Trust Signal */}
              <div className="mt-5 sm:mt-6 flex items-center gap-2 text-[13px] text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#62B5DA] shrink-0" />
                <span>{siteContent.hero.trustNote}</span>
              </div>

            </div>

            {/* Right 5 Columns: Hero Feature Panel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                <svg
                  className="pointer-events-none absolute -right-16 -top-14 hidden h-[480px] w-[480px] animate-[spin_40s_linear_infinite] sm:block"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#F4974C" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="32 180" />
                </svg>
                <HeroFeaturePanel />
              </div>
            </div>

          </div>
        </div>

        {/* Large Cinematic Hero Photography (Half-Screen / Full-Bleed with Duotone) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 relative z-10 w-full">
          <div className="relative rounded-3xl overflow-hidden border border-[#336E95]/40 shadow-2xl group">
            
            {/* Authentic Hero Photography with Navy Duotone Overlay */}
            <img 
              src="/src/assets/images/hero_facility_safety_1792434392427.jpg" 
              alt="Modern Indian facility corridor with clean safety layout and illuminated exit signs" 
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            
            {/* Duotone Navy Overlay for Visual Cohesion */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#0F2C47] via-[#0F2C47]/40 to-transparent pointer-events-none" 
              aria-hidden="true" 
            />
          </div>
        </div>

      </section>

      {/* 
        ========================================================================
        2. SCROLLING BAND OF SECTORS SERVED (Continuous Marquee Ticker)
        ========================================================================
      */}
      <section 
        className="py-6 bg-[#0B1B2B] border-b border-[#1A456F] overflow-hidden" 
        aria-label="Sectors Served Across Jharkhand"
      >
        <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
          {/* Double the list for seamless continuous infinite scroll */}
          {[...siteContent.sectorsServed, ...siteContent.sectorsServed].map((sec, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[14px] font-semibold text-slate-300 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4974C]" />
              <span className="text-white">{sec.name}</span>
              <span className="text-slate-500 font-normal text-[13px] hidden md:inline">({sec.context})</span>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        3. SERVICES AS AN ASYMMETRIC BENTO GRID
        Every tile features rich photography, clear deliverables, and enquiry CTAs
        ========================================================================
      */}
      <section id="services" className="py-24 md:py-36 bg-[#F3F7FA] text-[#0B1B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#336E95] block mb-2">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C47] tracking-tight">
              Integrated Workplace & Facility Safety Solutions.
            </h2>
            <p className="text-[16px] md:text-[17px] text-slate-600 mt-4 leading-relaxed">
              Every service is delivered with hands-on premises walkthroughs and practical implementation. No generic templates.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-12 gap-8">
            
            {/* Bento Tile 1: Escape Route Planning (Large 7 Columns) */}
            <div className="col-span-12 lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div className="p-8 sm:p-10">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#336E95] block mb-2">
                  Premises Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C47] mb-3">
                  Emergency Escape Route Planning
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-6">
                  Floor-plan based evacuation diagrams, exit and stairwell directional marking, outdoor assembly points, and staff drill guidance.
                </p>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-600 font-medium mb-6">
                  <span className="text-[#0F2C47] font-semibold">Floor Plan Schematics</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-[#0F2C47] font-semibold">Assembly Point Marking</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-[#0F2C47] font-semibold">Glow-in-the-Dark Exit Signage</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleEnquireService('Emergency Escape Route Planning')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4974C] hover:bg-[#F0853F] text-[#0F2C47] text-[14px] font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Enquire for Premises</span>
                    <ArrowRight className="w-4 h-4 text-[#0F2C47]" />
                  </button>
                  <a
                    href="/evacuation-planning/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/evacuation-planning/');
                    }}
                    className="text-[14px] font-semibold text-[#1A456F] hover:text-[#0F2C47]"
                  >
                    View Technical Details →
                  </a>
                </div>
              </div>

              {/* Large Photograph Carrier */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 border-t border-slate-100">
                <img 
                  src="/src/assets/images/bento_evacuation_map_1792434392086.jpg" 
                  alt="Floor-plan evacuation map installed in an Indian corporate building" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-3 left-3 backdrop-blur-md bg-[#0F2C47]/85 border border-white/10 px-3 py-1 rounded-lg text-[12px] text-slate-200 font-medium">
                  Floor-Plan Evacuation Blueprint
                </div>
              </div>
            </div>

            {/* Bento Tile 2: Safety Equipment Supply & Upkeep (5 Columns) */}
            <div className="col-span-12 lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div className="p-8 sm:p-10">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#336E95] block mb-2">
                  Equipment Management
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C47] mb-3">
                  Safety Equipment Supply & Upkeep
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-6">
                  Supply and ongoing management of basic safety equipment: fire extinguishers, first-aid kits, PPE, and high-visibility signage.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleEnquireService('Safety Equipment Supply & Ongoing Upkeep')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4974C] hover:bg-[#F0853F] text-[#0F2C47] text-[14px] font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Enquire for Equipment</span>
                    <ArrowRight className="w-4 h-4 text-[#0F2C47]" />
                  </button>
                </div>
              </div>

              {/* Large Photograph Carrier */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 border-t border-slate-100">
                <img 
                  src="/src/assets/images/bento_fire_equipment_1792434392958.jpg" 
                  alt="Wall-mounted fire extinguisher and safety gear in a modern workplace" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-3 left-3 backdrop-blur-md bg-[#0F2C47]/85 border border-white/10 px-3 py-1 rounded-lg text-[12px] text-slate-200 font-medium">
                  Certified Equipment & Maintenance
                </div>
              </div>
            </div>

            {/* Bento Tile 3: Safety Awareness & Training (5 Columns) */}
            <div className="col-span-12 lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div className="p-8 sm:p-10">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#336E95] block mb-2">
                  Education & Campaigns
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C47] mb-3">
                  Safety Awareness & Training
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-6">
                  Creative bilingual posters, interactive awareness workshops, and school emergency drills that change daily safety habits.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleEnquireService('Safety Awareness & Training Programs')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4974C] hover:bg-[#F0853F] text-[#0F2C47] text-[14px] font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Book Workshop</span>
                    <ArrowRight className="w-4 h-4 text-[#0F2C47]" />
                  </button>
                </div>
              </div>

              {/* Large Photograph Carrier */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 border-t border-slate-100">
                <img 
                  src="/src/assets/images/bento_safety_training_1792434393774.jpg" 
                  alt="Indian workplace safety training workshop and bilingual poster display" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-3 left-3 backdrop-blur-md bg-[#0F2C47]/85 border border-white/10 px-3 py-1 rounded-lg text-[12px] text-slate-200 font-medium">
                  Bilingual Training Workshops
                </div>
              </div>
            </div>

            {/* Bento Tile 4: General Safety Consulting (7 Columns) */}
            <div className="col-span-12 lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div className="p-8 sm:p-10">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#336E95] block mb-2">
                  On-Site Advisory
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C47] mb-3">
                  General Safety Consulting & Walkthroughs
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-6">
                  Practical on-site risk walkthroughs and candid advice for factories, schools, offices, and public facilities across Jharkhand.
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-600 font-medium mb-6">
                  <span className="text-[#0F2C47] font-semibold">Physical Facility Walkthrough</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-[#0F2C47] font-semibold">Corridor & Exit Clearances</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-[#0F2C47] font-semibold">Remediation Action Matrix</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleEnquireService('General Safety Walkthrough & Consulting')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4974C] hover:bg-[#F0853F] text-[#0F2C47] text-[14px] font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Schedule Walkthrough</span>
                    <ArrowRight className="w-4 h-4 text-[#0F2C47]" />
                  </button>
                  <a
                    href="/services/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/services/');
                    }}
                    className="text-[14px] font-semibold text-[#1A456F] hover:text-[#0F2C47]"
                  >
                    View Service Deliverables →
                  </a>
                </div>
              </div>

              {/* Large Photograph Carrier */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 border-t border-slate-100">
                <img 
                  src="/src/assets/images/bento_site_inspection_1792434394313.jpg" 
                  alt="Professional site walkthrough inspection inside an Indian facility" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-3 left-3 backdrop-blur-md bg-[#0F2C47]/85 border border-white/10 px-3 py-1 rounded-lg text-[12px] text-slate-200 font-medium">
                  On-Site Audit & Clearance Review
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        4. THE 4-STEP EXECUTION SEQUENCE (Linear / Stripe Polish)
        Natural scroll-flowing sequence with sticky left progression
        ========================================================================
      */}
      <section 
        id="execution-sequence"
        className="py-24 md:py-32 bg-[#0F2C47] text-white border-t border-b border-[#1A456F] relative"
        aria-label="4-Step Execution Sequence"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left 5 Columns: Sticky Section Overview & Interactive Phase Navigator */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#62B5DA] block mb-2">
                  Execution Sequence
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {siteContent.howWeWork.title}
                </h2>
                <p className="text-[16px] md:text-[17px] text-slate-300 mt-3 leading-relaxed">
                  {siteContent.howWeWork.lead}
                </p>
              </div>

              {/* Interactive Step Switcher */}
              <div className="flex flex-col gap-3">
                {siteContent.howWeWork.steps.map((st, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={st.num}
                      type="button"
                      onClick={() => handleStepClick(idx)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between cursor-pointer ${
                        isActive 
                          ? 'bg-[#163A5F] border-[#62B5DA] shadow-lg shadow-[#0B1B2B]/40 ring-1 ring-[#62B5DA]/40 translate-x-1' 
                          : 'bg-[#0F2C47]/80 border-[#1A456F] opacity-75 hover:opacity-100 hover:border-[#336E95]'
                      }`}
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-sm sm:text-base font-black tabular-nums transition-colors duration-200 ${
                          isActive 
                            ? 'bg-[#F4974C] text-[#0F2C47] shadow-sm' 
                            : 'bg-[#1A456F]/60 text-slate-400'
                        }`}>
                          {st.num}
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            {st.name}
                          </h4>
                          <span className={`text-[13px] font-medium transition-colors ${
                            isActive ? 'text-[#62B5DA]' : 'text-slate-400'
                          }`}>
                            {st.kicker}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isActive && <ChevronRight className="w-5 h-5 text-[#F4974C]" />}
                      </div>
                    </button>
                  );
                })}
              </div>


            </div>

            {/* Right 7 Columns: The 4 Distinct Phase Cards Stacked in Sequence */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
              {siteContent.howWeWork.steps.map((st, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={st.num}
                    ref={(el) => { stepRefs.current[idx] = el; }}
                    className={`rounded-3xl p-6 sm:p-9 md:p-10 border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                      isActive
                        ? 'bg-[#1A456F]/70 border-[#62B5DA] shadow-2xl ring-1 ring-[#62B5DA]/40'
                        : 'bg-[#1A456F]/35 border-[#336E95]/30 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {/* Top status bar */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#62B5DA] font-bold px-3 py-1 rounded-full bg-[#0F2C47]/90 border border-[#336E95]/40">
                        {idx === 0 && <MapPin className="w-3.5 h-3.5 text-[#F4974C]" />}
                        {idx === 1 && <Compass className="w-3.5 h-3.5 text-[#F4974C]" />}
                        {idx === 2 && <HardHat className="w-3.5 h-3.5 text-[#F4974C]" />}
                        {idx === 3 && <Shield className="w-3.5 h-3.5 text-[#F4974C]" />}
                        Phase {st.num} · {st.kicker}
                      </span>

                      <span className="text-[13px] font-bold tabular-nums text-slate-400">
                        Step {idx + 1} / 4
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      {st.name}: {st.kicker}
                    </h3>
                    
                    <p className="text-[15px] sm:text-[17px] text-slate-200 leading-relaxed mb-6">
                      {st.description}
                    </p>

                    {/* Primary Deliverable Focus Box */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2C47]/90 border border-[#336E95]/50 flex items-start gap-3.5 text-[14px] text-slate-200 shadow-inner">
                      <CheckCircle2 className="w-5 h-5 text-[#F4974C] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-[#62B5DA] font-bold mb-1">
                          Primary Deliverable Focus
                        </span>
                        <span className="font-semibold text-white">
                          {st.focus}
                        </span>
                      </div>
                    </div>

                    {/* Footer consultation link */}
                    <div className="mt-6 pt-5 border-t border-[#336E95]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-slate-400">
                      <span>Tailored for facilities in Ranchi & Eastern India</span>
                      <button
                        type="button"
                        onClick={() => handleEnquireService(`Phase: ${st.name}`)}
                        className="font-bold text-[#F4974C] hover:text-[#F0853F] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <span>Consult our team on this phase</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        5. WHY SMS (Asymmetric Split Layout)
        ========================================================================
      */}
      <section className="py-24 md:py-36 bg-[#0B1B2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 5 Columns: Bold Statement */}
            <div className="lg:col-span-5">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#62B5DA] block mb-2">
                Institutional Trust
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Built for Premises Realities, Not Shelf Reports.
              </h2>
              <p className="text-[16px] md:text-[17px] text-slate-300 leading-relaxed mb-8">
                {siteContent.whySms.lead}
              </p>

            </div>

            {/* Right 7 Columns: 4 Key Differentiators */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteContent.whySms.points.map((pt) => (
                <div 
                  key={pt.num}
                  className="p-8 rounded-2xl bg-[#0F2C47] border border-[#1A456F] hover:border-[#336E95] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-[#F4974C] tabular-nums block mb-4">
                      {pt.num}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {pt.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        6. AWARENESS SHOWCASE: BILINGUAL SAFETY POSTERS (Enlargeable Lightbox)
        ========================================================================
      */}
      <section className="py-24 md:py-36 bg-[#F3F7FA] text-[#0B1B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#336E95] block mb-2">
                Visual Campaign Artwork
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C47] tracking-tight">
                {siteContent.awarenessShowcase.title}
              </h2>
              <p className="text-[16px] md:text-[17px] text-slate-600 mt-3 leading-relaxed">
                {siteContent.awarenessShowcase.lead}
              </p>
            </div>

            <a
              href="/awareness-events/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/awareness-events/');
              }}
              className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1A456F] hover:text-[#0F2C47] transition-colors"
            >
              <span>View full poster catalog</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bilingual Poster Artwork Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.awarenessShowcase.posters.map((poster) => (
              <div
                key={poster.id}
                onClick={() => setSelectedPoster(poster)}
                className="cursor-pointer group bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#336E95] transition-all flex flex-col justify-between"
              >
                {/* Poster Graphic Representation in SMS Palette */}
                <div className="bg-[#0F2C47] text-white rounded-xl p-5 border-4 border-[#1A456F] group-hover:border-[#F4974C] transition-colors flex flex-col justify-between aspect-[3/4] relative overflow-hidden">
                  
                  {/* Top Bar on Poster */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#F4974C] mb-3">
                      <span>SMS SAFETY</span>
                      <span>{poster.category}</span>
                    </div>

                    <h4 className="text-[15px] font-extrabold text-white leading-snug mb-1">
                      {poster.title}
                    </h4>

                    {/* Hindi Title */}
                    <div className="text-[13px] font-medium text-[#62B5DA] mb-3">
                      {poster.titleHindi}
                    </div>
                  </div>

                  {/* Center Tagline */}
                  <div className="p-3 rounded-lg bg-[#1A456F]/60 border border-[#336E95]/40 text-center my-auto">
                    <p className="text-[12px] italic text-slate-200 font-semibold">
                      &ldquo;{poster.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Footer on Poster */}
                  <div className="text-[11px] text-slate-400 border-t border-[#1A456F] pt-2 flex items-center justify-between">
                    <span>Hindi & English</span>
                    <span className="text-[#F4974C] font-semibold">Tap to Enlarge</span>
                  </div>
                </div>

                <div className="pt-3 text-[13px] flex items-center justify-between text-slate-600">
                  <span className="font-semibold text-[#0F2C47]">{poster.category} Safety</span>
                  <span className="text-[12px] text-slate-500">{poster.dimensions}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        7. VERIFIED TESTIMONIALS / PROOF STRIP
        ========================================================================
      */}
      <section className="py-20 bg-[#0B1B2B] text-white border-t border-[#1A456F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[13px] uppercase tracking-wider text-[#62B5DA] font-bold block mb-2">
              Verified Operational Records
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Institutional Documentation & On-Site Proof
            </h3>
            <p className="text-[15px] text-slate-300 mt-2">
              Every safety engagement is grounded in physical inspection logs, certified layouts, and verifiable site deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#0F2C47] border border-[#1A456F] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#62B5DA] font-bold block mb-2">01 · Audit Records</span>
                <h4 className="text-lg font-bold text-white mb-2">Physical Premises Walkthroughs</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Hazard identification logs, exit clearance verifications, and custom remedial recommendations prepared directly on client premises.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1A456F] text-xs font-semibold text-[#F4974C]">
                Documented on site
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2C47] border border-[#1A456F] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#62B5DA] font-bold block mb-2">02 · Bilingual Systems</span>
                <h4 className="text-lg font-bold text-white mb-2">Dual-Language Compliance</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Evacuation plans, safety graphics, and fire action procedures written in both Hindi and English for zero ambiguity among factory and office teams.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1A456F] text-xs font-semibold text-[#62B5DA]">
                Hindi & English standardized
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2C47] border border-[#1A456F] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#62B5DA] font-bold block mb-2">03 · Verified Office</span>
                <h4 className="text-lg font-bold text-white mb-2">Ranchi Physical Presence</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Formal engagement records, blueprints, and letters of appreciation are available for in-person review at our Main Road, Capitol Hill office.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1A456F] text-xs font-semibold text-[#F4974C]">
                Direct consultation available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        8. FINAL FULL-BLEED CTA BAND
        ========================================================================
      */}
      <section className="py-24 md:py-36 bg-gradient-to-r from-[#0F2C47] via-[#1A456F] to-[#0F2C47] text-white relative overflow-hidden border-t border-[#1A456F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="text-[13px] uppercase tracking-wider text-[#62B5DA] font-bold block mb-3">
            Safety Management Solutions · Ranchi
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 text-balance">
            Elevate Safety Preparedness Across Your Premises.
          </h2>

          <p className="text-[16px] md:text-[18px] text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a practical on-site walkthrough or discuss evacuation route mapping and equipment for your facility in Jharkhand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-[16px] font-bold text-[#0F2C47] bg-[#F4974C] hover:bg-[#F0853F] active:bg-[#E57737] rounded-xl transition-all shadow-xl hover:shadow-2xl hover:shadow-[#F4974C]/30"
            >
              <span>{siteContent.hero.primaryCta}</span>
              <ArrowUpRight className="w-5 h-5 text-[#0F2C47]" />
            </a>

            <a
              href={siteContent.contact.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-[16px] font-semibold text-white bg-[#1A456F] hover:bg-[#275079] border border-[#336E95] rounded-xl transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              <span>Chat directly on Whatsapp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Poster Enlarge Lightbox Modal */}
      <PosterModal
        poster={selectedPoster}
        onClose={() => setSelectedPoster(null)}
        onEnquire={(posterTitle) => {
          handleEnquireService(`Poster Artwork: ${posterTitle}`);
        }}
      />

    </div>
  );
};
