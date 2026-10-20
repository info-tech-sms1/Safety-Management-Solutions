import React, { useState } from 'react';
import { siteContent } from '../content/siteContent';
import { 
  Megaphone, 
  Signpost, 
  ShieldCheck, 
  ClipboardCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Check, 
  Users, 
  Package, 
  Layers 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onSelectService?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  onNavigate, 
  onSelectService 
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setOpenFaq(prev => prev === faqId ? null : faqId);
  };

  const detailedServices = [
    {
      id: 'awareness',
      title: 'Safety Awareness & Training Programs',
      icon: <Megaphone className="w-7 h-7 text-[#62B5DA]" />,
      lead: 'Creative educational campaigns, bilingual visual posters, and interactive workshops that build a genuine safety habit among employees, students, and workers.',
      whoItsFor: 'Commercial offices, industrial plants, schools, colleges, residential societies, and public institutions.',
      whatsIncluded: [
        'Custom-designed bilingual safety posters (Hindi & English) for your specific workplace risks',
        'Staff and worker training sessions on fire prevention, machine safety, and commute caution',
        'Hands-on fire extinguisher operation drills using the PASS method',
        'Emergency response team (ERT) / Floor Warden role briefings',
        'Laminated visual emergency action charts for cafeteria and common corridors',
      ],
      deliverables: [
        'Full set of printed rigid/vinyl safety posters matching your premises',
        'Participant completion attendance roster and training summary note',
        'Digital PDF safety bulletin kit for internal circulation',
      ],
      simpleProcess: [
        { step: '1', title: 'Need Assessment', desc: 'Identify priority hazard themes for your workforce.' },
        { step: '2', title: 'Content Customization', desc: 'Prepare posters and training modules suited to your language preferences.' },
        { step: '3', title: 'On-Site Workshop', desc: 'Conduct interactive session with live demonstrations.' },
      ],
      faqs: [
        {
          q: 'Are the training workshops conducted on-site at our location?',
          a: 'Yes, our safety trainers travel directly to your facility in Ranchi and surrounding districts across Jharkhand with all required demonstration materials.',
        },
        {
          q: 'Can the posters be tailored with our company name and logo?',
          a: 'Yes, we customize all awareness materials with your organization’s branding, emergency phone numbers, and assembly zone specifics.',
        },
      ],
    },
    {
      id: 'evacuation',
      title: 'Emergency Escape Route Planning',
      icon: <Signpost className="w-7 h-7 text-[#62B5DA]" />,
      lead: 'Floor-plan based evacuation diagrams, emergency exit and stairwell directional layouts, assembly point markings, and drill guidance for buildings of all sizes.',
      whoItsFor: 'Commercial buildings, schools, colleges, multi-story offices, hospitals, factories, and warehouses.',
      whatsIncluded: [
        'On-site premises walkthrough to measure corridors, stairwells, and door clearances',
        'Identification of primary and secondary emergency evacuation routes',
        'Clear designation of safe outdoor assembly points away from falling hazard zones',
        'Glow-in-the-dark photoluminescent exit signage planning',
        'Guidance on conducting orderly, calm building evacuation drills',
      ],
      deliverables: [
        'Premises-specific 2D architectural evacuation floor plans with "YOU ARE HERE" pins',
        'Durable framed or acrylic-mounted evacuation diagrams for wall installation',
        'Photoluminescent exit signs and directional arrow schedule',
        'Practical evacuation drill procedure checklist for floor marshals',
      ],
      simpleProcess: [
        { step: '1', title: 'Premises Walkthrough', desc: 'Verify floor plans, exits, obstacles, and staircases.' },
        { step: '2', title: 'Draft Evacuation Blueprint', desc: 'Design color-coded escape routes and signage zones.' },
        { step: '3', title: 'Installation & Drill', desc: 'Mount diagrams at key decision points and guide staff.' },
      ],
      faqs: [
        {
          q: 'Do you need existing architectural CAD drawings to begin?',
          a: 'While architectural CAD files are helpful, they are not mandatory. If no blueprints exist, our team surveys the building layout and drafts the diagram from physical measurements.',
        },
        {
          q: 'What makes your evacuation maps clear in high-stress situations?',
          a: 'We use high-contrast color standards, bold exit arrows, orientation matching the viewer’s physical gaze, and bilingual labels so anyone can instantly understand their route.',
        },
      ],
    },
    {
      id: 'equipment',
      title: 'Safety Equipment Supply & Ongoing Upkeep',
      icon: <ShieldCheck className="w-7 h-7 text-[#62B5DA]" />,
      lead: 'Supply and scheduled management of essential safety equipment including fire extinguishers, industrial first-aid stations, PPE, and glow-in-the-dark signage.',
      whoItsFor: 'Offices, manufacturing facilities, clinics, residential societies, educational institutions, and logistics centers.',
      whatsIncluded: [
        'ABC dry chemical powder extinguishers (2kg, 4kg, 6kg, 9kg) and CO2 extinguishers',
        'Heavy-duty floor stands, wall brackets, and weather-protective covers',
        'Industrial wall-mounted first-aid kits and emergency eyewash stations',
        'Personal protective equipment (helmets, high-visibility vests, eye protection, gloves)',
        'Routine inspection schedule cards and pressure verification tracking',
      ],
      deliverables: [
        'Delivered, verified, and mounted safety equipment placed at designated heights',
        'Comprehensive asset register listing location, cylinder type, and next service date',
        'Maintenance log tag attached to every active extinguisher and kit',
      ],
      simpleProcess: [
        { step: '1', title: 'Equipment Audit', desc: 'Review existing extinguishers and identify gaps.' },
        { step: '2', title: 'Supply & Placement', desc: 'Deliver verified equipment and securely mount with brackets.' },
        { step: '3', title: 'Scheduled Upkeep', desc: 'Perform regular pressure checks and consumable refills.' },
      ],
      faqs: [
        {
          q: 'Do you handle extinguisher refilling and servicing?',
          a: 'Yes, we provide routine inspection services, hydrostatic pressure tracking, and scheduled refilling for fire extinguishers in Ranchi.',
        },
        {
          q: 'Can you supply complete PPE starter packs for site workers?',
          a: 'Yes, we supply bundles including ISI-marked safety helmets, high-vis vests, impact goggles, and heavy-duty gloves.',
        },
      ],
    },
    {
      id: 'consulting',
      title: 'General Safety Consulting & Walkthroughs',
      icon: <ClipboardCheck className="w-7 h-7 text-[#62B5DA]" />,
      lead: 'Practical risk walkthroughs, hazard identification, and straightforward advisory designed to help managers spot preventable hazards before they cause injuries.',
      whoItsFor: 'Site managers, factory heads, school principals, facility managers, and enterprise office leads.',
      whatsIncluded: [
        'Comprehensive physical walkthrough covering electrical rooms, stairs, corridors, and chemical storage',
        'Identification of trip, slip, and fall hazards in high-traffic zones',
        'Corridor and emergency exit door clearance inspection',
        'Advice on good storage practices for flammable materials and chemicals',
        'Plain-English priority action summary for management',
      ],
      deliverables: [
        'Photographic walkthrough advisory report highlighting practical observations',
        'Prioritized action matrix: Immediate Actions vs. Long-Term Enhancements',
        'Debrief session with premises administrative leadership',
      ],
      simpleProcess: [
        { step: '1', title: 'Facility Tour', desc: 'Conduct thorough physical walkthrough with site manager.' },
        { step: '2', title: 'Risk Synthesis', desc: 'Document observations and identify actionable remediations.' },
        { step: '3', title: 'Action Debrief', desc: 'Present concise practical recommendations to leadership.' },
      ],
      faqs: [
        {
          q: 'Is this consulting process aligned with good safety practices?',
          a: 'Yes. Our recommendations are grounded in established workplace safety principles, practical life safety fundamentals, and premises realities.',
        },
        {
          q: 'How long does a typical on-site safety walkthrough take?',
          a: 'For an average office or school, a walkthrough typically takes 2 to 4 hours. Larger industrial sites may take a full day.',
        },
      ],
    },
  ];

  return (
    <div className="bg-[#F3F7FA] text-[#0B1B2B] pb-20">
      {/* Header Banner */}
      <section className="bg-[#0F2C47] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1A456F]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#62B5DA] block mb-2">
              Comprehensive Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Safety Services & Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              SMS provides end-to-end practical safety services for workplaces, institutions, and residential societies across Ranchi and Eastern India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Detailed Service Blocks */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {detailedServices.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
          >
            {/* Top Service Title & Overview */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2C47] flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#336E95] font-bold block">
                      Service Pillar 0{idx + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F2C47]">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                  {service.lead}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <Users className="w-4 h-4 text-[#336E95] shrink-0" />
                  <span><strong>Ideal for:</strong> {service.whoItsFor}</span>
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onSelectService) onSelectService(service.title);
                    onNavigate('/contact/');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F4974C] hover:bg-[#F0853F] text-[#0F2C47] text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm"
                >
                  <span>Request Service Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#0F2C47]" />
                </a>

                {service.id === 'evacuation' && (
                  <a
                    href="/evacuation-planning/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/evacuation-planning/');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0F2C47] text-xs font-semibold rounded-xl transition-colors"
                  >
                    <span>View Sample Map Blueprint</span>
                  </a>
                )}

                {service.id === 'equipment' && (
                  <a
                    href="/safety-equipment/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/safety-equipment/');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0F2C47] text-xs font-semibold rounded-xl transition-colors"
                  >
                    <span>Browse Equipment Catalogue</span>
                  </a>
                )}
              </div>
            </div>

            {/* Inclusions & Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-slate-100">
              
              {/* What's Included */}
              <div>
                <h3 className="text-base font-bold text-[#0F2C47] flex items-center gap-2 mb-4">
                  <Package className="w-4 h-4 text-[#F4974C]" />
                  <span>What is Included</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {service.whatsIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concrete Deliverables */}
              <div>
                <h3 className="text-base font-bold text-[#0F2C47] flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-[#F4974C]" />
                  <span>What You Receive (Deliverables)</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#1A456F] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Simple 3-Step Process Strip */}
            <div className="py-8 border-b border-slate-100">
              <h3 className="text-xs uppercase tracking-wider text-[#336E95] font-bold mb-4">
                Service Delivery Workflow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.simpleProcess.map((step) => (
                  <div key={step.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-black text-[#F4974C] block mb-1">
                      Phase {step.step}
                    </span>
                    <h4 className="text-sm font-bold text-[#0F2C47] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion for this Service */}
            <div className="pt-8">
              <h3 className="text-sm font-bold text-[#0F2C47] mb-4">
                Frequently Asked Questions about {service.title}
              </h3>
              <div className="space-y-3">
                {service.faqs.map((faq, fIdx) => {
                  const faqKey = `${service.id}-${fIdx}`;
                  const isOpen = openFaq === faqKey;
                  return (
                    <div
                      key={faqKey}
                      className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faqKey)}
                        className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-[#0F2C47] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4974C]"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#336E95] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#336E95] shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 animate-in fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </section>
        ))}
      </main>
    </div>
  );
};
