/**
 * Safety Management Solutions (SMS)
 * Centralized Site Content Matrix
 * 
 * Note: All text is isolated here so that Hindi ('hi') or additional language
 * dictionaries can be added seamlessly in the future without altering UI components.
 */

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  whatsIncluded: string[];
  deliverables: string[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface EquipmentCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: {
    name: string;
    description: string;
    usage: string;
    specs: string;
  }[];
}

export interface PosterItem {
  id: string;
  title: string;
  category: 'Fire' | 'Electrical' | 'Workplace' | 'Road' | 'Health' | 'Community';
  summary: string;
  tagline: string;
  dimensions: string;
  languagesAvailable: string[];
}

export interface EventProgram {
  id: string;
  title: string;
  category: string;
  targetGroup: string;
  duration: string;
  format: string;
  overview: string;
  keyTopics: string[];
}

export const siteContent = {
  meta: {
    siteName: 'Safety Management Solutions (SMS)',
    shortName: 'SMS',
    tagline: 'Safety starts with you.',
    region: 'Ranchi, Jharkhand & Eastern India',
    canonicalBase: 'https://safetymanagementsolutions.in',
  },

  contact: {
    phone: '+91 9334701135',
    phoneFormatted: '+91 93347 01135',
    whatsAppUrl: 'https://wa.me/919334701135',
    email: 'Info@safetymanagementsolutions.in',
    website: 'safetymanagementsolutions.in',
    addressLine1: 'Main Road, opposite Capitol Hill, Walking Street',
    addressFloor: '4th Floor',
    city: 'Ranchi',
    state: 'Jharkhand',
    pincode: '834001',
    fullAddress: 'Main Road, opposite Capitol Hill, Walking Street, 4th Floor, Ranchi, Jharkhand 834001',
    director: 'Sabir Hussain',
    businessHours: 'Monday – Saturday: 9:30 AM – 6:30 PM (Emergency consultations on request)',
    mapCoordinates: {
      lat: 23.3643,
      lng: 85.3262,
    },
  },

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Escape Planning', href: '/evacuation-planning/' },
    { label: 'Equipment', href: '/safety-equipment/' },
    { label: 'Awareness', href: '/awareness-events/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],

  hero: {
    kicker: 'Workplace & Community Safety Services in Ranchi & Jharkhand',
    headline: 'Practical Safety Solutions for Workplaces, Schools & Facilities',
    subheadline: 'SMS delivers hands-on safety awareness training, floor-plan evacuation mapping, basic safety equipment supply, and practical safety walkthroughs across Jharkhand and neighboring states.',
    primaryCta: 'Request a Free Safety Consultation',
    secondaryCta: 'Explore Our Services',
    trustNote: 'Tailored specifically to your premises · Aligned with good safety practice',
  },

  trustStrip: [
    { label: 'Premises-Tailored', detail: 'Practical walkthroughs suited to your exact layout' },
    { label: 'Complete Upkeep', detail: 'Supply, inspection & ongoing equipment management' },
    { label: 'Creative Awareness', detail: 'Culturally relatable training & bilingual poster campaigns' },
    { label: 'Local In Ranchi', detail: 'Fast on-site presence across Jharkhand & regional sites' },
  ],

  servicesOverview: [
    {
      id: 'safety-awareness',
      title: 'Safety Awareness & Training',
      slug: '/awareness-events/',
      icon: 'Megaphone',
      summary: 'Creative awareness posters, bilingual campaign material, and engaging training workshops for staff, students, and workers.',
      highlight: 'Culturally resonant educational material that changes daily safety habits.',
    },
    {
      id: 'evacuation-planning',
      title: 'Emergency Escape Route Planning',
      slug: '/evacuation-planning/',
      icon: 'Signpost',
      summary: 'Premises-specific evacuation maps, clear exit signage layouts, assembly point designations, and structured drill guidance.',
      highlight: 'Clear floor plans showing primary and secondary emergency exit routes.',
    },
    {
      id: 'safety-equipment',
      title: 'Safety Equipment Supply & Upkeep',
      slug: '/safety-equipment/',
      icon: 'ShieldCheck',
      summary: 'Supply and ongoing maintenance of fire extinguishers, industrial first-aid stations, protective gear (PPE), and safety signage.',
      highlight: 'Routine inspection schedules and replenishment so your gear is always ready.',
    },
    {
      id: 'safety-consulting',
      title: 'General Safety Consulting',
      slug: '/services/',
      icon: 'ClipboardCheck',
      summary: 'On-site risk walkthroughs, practical hazard identification, and straightforward advisory for factories, offices, and campuses.',
      highlight: 'Plain-English action plans prioritized by real risk, without jargon.',
    },
  ],

  whySms: {
    title: 'Why Choose Safety Management Solutions',
    lead: 'Built from the ground up to solve real safety challenges facing businesses, schools, and communities in Jharkhand and Eastern India.',
    points: [
      {
        title: 'Practical, Not Academic',
        description: 'We don’t produce thick, unreadable reports that sit on a shelf. We focus on visible floor plans, working fire extinguishers, clear signage, and educated staff.',
      },
      {
        title: 'Premises-Tailored Solutions',
        description: 'Every building is unique. We walk your premises, identify actual physical choke points, and design evacuation paths and equipment placement tailored to your reality.',
      },
      {
        title: 'Creative, Relatable Awareness',
        description: 'Safety posters and sessions that actually connect with people. Available in Hindi and English with crisp visuals designed to be understood at a glance.',
      },
      {
        title: 'Equipment Supply & Ongoing Management',
        description: 'We do not just drop off safety equipment and walk away. We help you establish routine inspection dates, pressure checks, and consumable refills.',
      },
    ],
  },

  howWeWork: {
    title: 'Our 4-Step Practical Safety Workflow',
    lead: 'A methodical, straightforward process designed to raise safety preparedness without disrupting your daily operations.',
    steps: [
      {
        number: '01',
        name: 'Assess',
        subtitle: 'On-site Walkthrough',
        description: 'We visit your facility, walk through active work areas, review exit points, inspect existing equipment, and note practical safety vulnerabilities.',
      },
      {
        number: '02',
        name: 'Plan',
        subtitle: 'Tailored Action Map',
        description: 'We draft your premises evacuation layout, define optimal signage placement, recommend necessary equipment, and outline training priorities.',
      },
      {
        number: '03',
        name: 'Implement',
        subtitle: 'Installation & Training',
        description: 'We deliver and position equipment, mount high-visibility photoluminescent signage, install evacuation maps, and run staff training sessions.',
      },
      {
        number: '04',
        name: 'Sustain',
        subtitle: 'Routine Inspection & Drills',
        description: 'We assist with scheduled equipment status checks, refresher awareness campaigns, and guided mock evacuation drills to keep everyone prepared.',
      },
    ],
  },

  whoWeServe: [
    {
      category: 'Factories & Industrial Sites',
      description: 'Machinery zones, raw material storage, high-heat areas, and worker shift safety.',
      icon: 'Factory',
    },
    {
      category: 'Commercial Offices & IT Parks',
      description: 'Multi-floor workplace evacuation, server room fire safety, and ergonomic first-aid stations.',
      icon: 'Building2',
    },
    {
      category: 'Schools, Colleges & Hostels',
      description: 'Age-appropriate safety drills, laboratory hazard signage, and child-safe emergency routes.',
      icon: 'GraduationCap',
    },
    {
      category: 'Hospitals & Medical Centres',
      description: 'Non-ambulatory patient evacuation corridors, emergency oxygen zone safety, and clear exit boards.',
      icon: 'Cross',
    },
    {
      category: 'Residential Societies & High-Rises',
      description: 'Stairwell clearance campaigns, resident fire extinguisher training, and community assembly plans.',
      icon: 'Home',
    },
    {
      category: 'Warehouses & Logistics Hubs',
      description: 'Aisle clearance markings, loading dock safety, high-rack fire safety gear, and forklift paths.',
      icon: 'Boxes',
    },
    {
      category: 'Government & Administrative Offices',
      description: 'High-footfall public entrance signage, visitor evacuation routes, and staff safety drills.',
      icon: 'Landmark',
    },
    {
      category: 'Hospitality & Shopping Centers',
      description: 'Kitchen fire suppression tools, banquet hall exit markings, and staff emergency readiness.',
      icon: 'Store',
    },
  ],

  awarenessShowcase: {
    title: 'Creative Safety Posters & Campaign Materials',
    lead: 'Visual communication designed to be remembered. High-contrast, bilingual, and focused on everyday life-saving actions.',
    note: 'Custom posters available with your organisation’s logo and premises guidelines.',
    posters: [
      {
        id: 'fire-pass-method',
        title: 'How to Use a Fire Extinguisher (PASS Method)',
        category: 'Fire' as const,
        summary: 'Step-by-step visual guide: Pull, Aim, Squeeze, Sweep. Clear visual illustrations with English and Hindi captions.',
        tagline: 'Act quick, act right.',
        dimensions: 'A2 / A3 / Vinyl Board',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'electrical-hazard-safety',
        title: 'Electrical Safety at Work & Home',
        category: 'Electrical' as const,
        summary: 'Highlighting overloaded sockets, damaged insulation cords, water contact hazards, and MCB breaker awareness.',
        tagline: 'Electricity serves you. Respect its danger.',
        dimensions: 'A2 / A3 / Laminated Poster',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'emergency-evacuation-rules',
        title: 'Emergency Evacuation: Do’s and Don’ts',
        category: 'Workplace' as const,
        summary: 'Never use lifts during fire alarms, leave belongings, follow floor marshals, and walk calmly to the assembly point.',
        tagline: 'In an emergency, every second counts.',
        dimensions: 'A1 / A2 Acrylic Board',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'industrial-ppe-gear',
        title: 'Mandatory PPE Zone Checklist',
        category: 'Workplace' as const,
        summary: 'High-visibility visual reminder for helmets, safety boots, goggles, high-vis vests, and ear protection before entering floor.',
        tagline: 'Your family is waiting for you at home.',
        dimensions: 'A2 / A3 Rigid PVC Board',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'road-commute-safety',
        title: 'Two-Wheeler & Plant Traffic Safety',
        category: 'Road' as const,
        summary: 'Helmet strap fastening, safe site speed limits, blind-spot awareness around logistics trucks, and mobile phone zero-tolerance.',
        tagline: 'Speed gives a thrill, but safety saves lives.',
        dimensions: 'A2 / A3 Outdoor Flex',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'first-aid-burns-cuts',
        title: 'Immediate First-Aid for Burns & Cuts',
        category: 'Health' as const,
        summary: 'Cool running water for burns (no ice or paste), clean dressing for wounds, recovery position, and emergency call steps.',
        tagline: 'First response makes the difference.',
        dimensions: 'A2 / A3 Laminated Chart',
        languagesAvailable: ['Hindi', 'English'],
      },
    ],
  },

  eventsSection: {
    title: 'Workshops, Drills & Awareness Programs',
    lead: 'Interactive, real-world sessions led by safety professionals for employees, students, and resident communities.',
    programs: [
      {
        id: 'workplace-workshop',
        title: 'Workplace Fire & Emergency Response Workshop',
        category: 'Corporate & Industrial',
        targetGroup: 'Office staff, floor supervisors, factory workers',
        duration: 'Half-day (3–4 Hours)',
        format: 'Hands-on practical demonstration + classroom briefing',
        overview: 'Teaches staff how to spot fire hazards, use fire extinguishers on live demonstration fires where permissible, and lead team members to safety.',
        keyTopics: [
          'Classification of fires (Class A, B, C, Electrical)',
          'Extinguisher discharge mechanics (Hands-on training)',
          'Calling local emergency services with precise site coordinates',
          'Evacuation order and floor sweep procedures',
        ],
      },
      {
        id: 'school-preparedness',
        title: 'Campus Emergency & Disaster Readiness',
        category: 'Educational Institutions',
        targetGroup: 'School teachers, administrators, support staff, and students',
        duration: '2 Hours / Grade-level batches',
        format: 'Engaging interactive talk + guided building evacuation drill',
        overview: 'Instills calm discipline in children and teenagers, training teachers on accountability rosters and secure assembly point protocols.',
        keyTopics: [
          'Recognizing alarm sounds and keeping calm',
          'Single-file stairwell descent without pushing',
          'Classroom lockdown and earthquake drop-cover-hold',
          'Teacher headcounts at outdoor assembly zones',
        ],
      },
      {
        id: 'residential-drill',
        title: 'Residential High-Rise Fire Safety Session',
        category: 'Residential Societies',
        targetGroup: 'Apartment owners, security guards, domestic staff',
        duration: '2 Hours (Weekend morning)',
        format: 'Live courtyard demonstration + staircase walk',
        overview: 'Helps housing societies organize resident emergency wardens, clear common corridors, and train security guards on fire pump valves.',
        keyTopics: [
          'Common stairwell smoke barriers and door seals',
          'LPG cylinder leak response and kitchen fire safety',
          'Security guard role in guiding fire brigade trucks',
          'Elderly and infant assistance during power cuts',
        ],
      },
    ],
  },

  escapePlanningDetails: {
    hero: {
      title: 'Emergency Escape Route Planning & Evacuation Mapping',
      subtitle: 'Clear, legible, premises-tailored evacuation diagrams and assembly strategies for commercial buildings, educational institutions, and industrial plants in Ranchi and across Jharkhand.',
    },
    whyItMatters: 'In a real emergency with smoke, power outages, and anxiety, panic occurs when people do not know where to go. A well-designed, prominently placed evacuation map gives occupants immediate directional clarity.',
    deliverables: [
      {
        title: 'Architectural Floor-Plan Evacuation Diagrams',
        description: 'Clean 2D schematic layouts of your floors showing current location ("YOU ARE HERE"), primary escape routes, secondary escape routes, fire alarm call points, and extinguisher locations.',
      },
      {
        title: 'Exit & Stairwell Directional Signage Plan',
        description: 'Optimal positioning layout for photoluminescent (glow-in-the-dark) exit signs, directional arrows, and illuminated signs visible in sudden power outages.',
      },
      {
        title: 'Outdoor Assembly Point Designation',
        description: 'Identification of safe outdoor zones far enough from building collapse or smoke paths, with durable outdoor assembly point markers for headcounts.',
      },
      {
        title: 'Evacuation Drill & Marshalling Manual',
        description: 'Practical guidance booklet outlining warden duties, floor sweep checklists, visitor assistance protocols, and mock drill execution frequencies.',
      },
    ],
    sampleMapSpecs: {
      title: 'Standard SMS Evacuation Map Specification',
      features: [
        'High-contrast color scheme (Green escape vectors, Red fire equipment, Blue assembly zones)',
        'Bilingual text support (Hindi & English room and exit labels)',
        'Oriented to viewer perspective (map is rotated to match the direction the viewer faces)',
        'Weather-resistant, scratch-proof acrylic or metal framing options',
        'Photoluminescent substrate option for low-light visibility',
      ],
    },
    faqs: [
      {
        question: 'What information do we need to provide to start an escape plan?',
        answer: 'A copy of your premises layout, CAD drawing, architectural blueprint, or even a clear sketch. Our team can also conduct a physical site survey in Ranchi and surrounding areas to map doors, partitions, and staircases accurately.',
      },
      {
        question: 'Where should evacuation maps be placed inside our building?',
        answer: 'Evacuation diagrams should be mounted at every entrance, near passenger lifts, at staircase landings, in common corridors, cafeteria areas, and at major intersection points where foot traffic naturally pauses.',
      },
      {
        question: 'Do you help us conduct a practical mock evacuation drill after installing maps?',
        answer: 'Yes! We conduct guided drills where our safety advisors observe the evacuation flow, measure evacuation timing, identify bottlenecks, and present a practical debrief to management.',
      },
    ],
  },

  equipmentCatalogue: [
    {
      id: 'fire-safety',
      title: 'Fire Safety Equipment',
      description: 'Extinguishers, fire blankets, extinguisher cabinets, stands, and inspection tags suited for offices, schools, and factories.',
      iconName: 'Flame',
      items: [
        {
          name: 'ABC Dry Powder Fire Extinguisher (2kg / 4kg / 6kg / 9kg)',
          description: 'Multi-purpose extinguisher suitable for Class A (wood, paper, cloth), Class B (flammable liquids), and Class C (gases and electrical risks).',
          usage: 'Offices, server rooms, corridors, workshops, residential buildings.',
          specs: 'Stored pressure, brass valve, pressure gauge, wall mounting bracket included.',
        },
        {
          name: 'CO2 Carbon Dioxide Extinguisher (2kg / 4.5kg)',
          description: 'Leaves no residue. Ideal for electrical equipment, server racks, switchboards, and sensitive laboratory electronics.',
          usage: 'Electrical panels, data centers, computer labs, generator rooms.',
          specs: 'High-pressure seamless steel cylinder, non-conductive discharge horn.',
        },
        {
          name: 'Fire Blankets (1.2m x 1.2m / 1.8m x 1.8m)',
          description: 'Woven fiberglass fabric designed to smother small kitchen grease fires or wrap around a person whose clothes have caught fire.',
          usage: 'Commercial kitchens, pantry areas, welding booths, school science labs.',
          specs: 'Quick-release pull tabs, flame-retardant wall casing.',
        },
        {
          name: 'Heavy-Duty Extinguisher Floor Stands & Covers',
          description: 'Prevents floor damage, keeps extinguishers visible, and protects cylinders from outdoor moisture and dust.',
          usage: 'Factory floors, parking lots, outdoor generator sheds.',
          specs: 'Powder-coated steel or UV-stabilized heavy polyethylene.',
        },
      ],
    },
    {
      id: 'first-aid',
      title: 'First-Aid & Emergency Medical Care',
      description: 'Industrial first-aid kits, wall-mounted treatment boxes, and eye-wash emergency supplies for rapid first response.',
      iconName: 'HeartPulse',
      items: [
        {
          name: 'Industrial Workplace First-Aid Box (25 / 50 Person Capacity)',
          description: 'Stocked with sterile gauze, roller bandages, adhesive plaster, antiseptic lotion, burn dressing, CPR face shield, splints, and trauma shears.',
          usage: 'Offices, construction sites, manufacturing floors, school clinics.',
          specs: 'Durable wall-mountable lockable metallic box with clear inventory card.',
        },
        {
          name: 'Emergency Eyewash Station (Wall Mounted & Portable)',
          description: 'Provides immediate flush irrigation to eyes exposed to chemical splash, sawdust, corrosive dust, or hazardous debris.',
          usage: 'Chemical storage, battery charging areas, paint shops, woodwork workshops.',
          specs: 'Dual-head wash cups, dust covers, mirror, and saline wash bottles.',
        },
        {
          name: 'Foldable Emergency Patient Stretcher',
          description: 'Lightweight, high-strength aluminum alloy folding stretcher for safe transfer of injured occupants during evacuations.',
          usage: 'Factory floors, sports arenas, multi-story building medical stations.',
          specs: 'Compact two-fold design, waterproof oxford fabric, patient restraint straps.',
        },
      ],
    },
    {
      id: 'ppe',
      title: 'Personal Protective Equipment (PPE)',
      description: 'Protective gear for site supervisors, facility workers, maintenance teams, and visitor protection.',
      iconName: 'HardHat',
      items: [
        {
          name: 'Industrial Safety Helmets with Ratchet Suspension',
          description: 'High-density polyethylene shell protecting against falling debris, bumps, and electrical contact.',
          usage: 'Construction sites, manufacturing plants, maintenance yards.',
          specs: 'Adjustable headband (53–62 cm), sweatband, chin strap included.',
        },
        {
          name: 'High-Visibility Reflective Safety Vests',
          description: 'Bright fluorescent fabric with dual reflective strips ensuring visibility in daylight and under vehicle headlights.',
          usage: 'Traffic wardens, site visitors, logistics loading yards, warehouse staff.',
          specs: 'Breathable polyester, velcro front closure, EN/IS standard reflective tape.',
        },
        {
          name: 'Chemical & Impact Safety Goggles',
          description: 'Wrap-around clear polycarbonate goggles with anti-scratch and anti-fog coating for eye defense.',
          usage: 'Grinding, welding assistance, chemical handling, school chemistry labs.',
          specs: 'Wide elastic strap, indirect ventilation ports to prevent liquid splash.',
        },
        {
          name: 'Heavy-Duty Work Gloves (Leather / Nitrile / Cut-Resistant)',
          description: 'Ergonomic gloves offering grip and abrasion defense during material handling and machinery upkeep.',
          usage: 'Metal fabrication, loading docks, glass handling, electrical maintenance.',
          specs: 'Reinforced palms, breathable back, multiple thickness grades available.',
        },
      ],
    },
    {
      id: 'signage',
      title: 'Safety Signage & Glow-in-the-Dark Markers',
      description: 'Photoluminescent exit indicators, assembly point boards, caution signage, and floor marking tapes.',
      iconName: 'Signpost',
      items: [
        {
          name: 'Photoluminescent Glow-in-the-Dark Exit Signs',
          description: 'Absorbs ambient room light and glows brightly for hours during complete power blackouts, pointing occupants toward stairs and doors.',
          usage: 'Corridors, stairwells, basements, emergency exit doorways.',
          specs: 'Rigid PVC or aluminum sheet, high luminosity grade, weatherproof.',
        },
        {
          name: 'Emergency Assembly Point Outdoor Sign Boards',
          description: 'Large, high-contrast weatherproof signboard marking the designated safe muster area for post-evacuation roll calls.',
          usage: 'Open grounds, parking areas, perimeter boundary gates.',
          specs: 'Reflective vinyl on heavy-gauge metal with pre-drilled pole mounting holes.',
        },
        {
          name: 'Hazard & Caution Signage (Electrical, Fire, Flammable)',
          description: 'Clear graphical warning signs identifying high-voltage panels, chemical storage, fire extinguisher locations, and PPE mandates.',
          usage: 'Utility rooms, server rooms, chemical stores, workshop entrances.',
          specs: 'Standard visual symbols, bilingual English & Hindi text.',
        },
      ],
    },
  ],

  about: {
    hero: {
      title: 'About Safety Management Solutions',
      subtitle: 'Dedicated to making workplaces, campuses, and communities in Jharkhand and Eastern India safer through practical planning, real equipment, and everyday awareness.',
    },
    story: {
      heading: 'Our Story & Ethos',
      paragraphs: [
        'Safety Management Solutions (SMS) was founded in Ranchi, Jharkhand with a simple and clear conviction: genuine safety does not come from complicated paperwork or compliance tick-boxes. Real safety happens when people understand risks, when clear evacuation paths exist, and when functional safety equipment is within arm’s reach.',
        'Across our cities, industrial zones, and educational institutions, safety measures are often treated as an afterthought or delayed until a minor incident turns into an emergency. SMS was built to bridge this gap by offering practical, accessible, and dependable safety solutions for institutions of every size.',
        'Whether it is a small school in Ranchi, a high-rise residential apartment complex, a manufacturing unit, or a corporate workspace, we approach each facility with careful attention to its unique physical layout, foot traffic, and practical needs.',
      ],
    },
    mission: {
      heading: 'Our Mission & Vision',
      missionText: 'To equip organizations and communities across Eastern India with the knowledge, emergency escape architecture, and equipment required to prevent accidents and protect lives during critical emergencies.',
      visionText: 'A culture where safety is recognized as a shared, everyday responsibility — where every employee, student, and citizen feels confident knowing how to respond calmly and safely when emergencies arise.',
    },
    values: [
      {
        title: 'Practical Action Over Jargon',
        description: 'We believe in straightforward, actionable safety advice that building occupants and workers can readily understand and apply.',
      },
      {
        title: 'Premises Respect',
        description: 'No two buildings are identical. We respect your physical layout, constraints, and daily operations when designing safety plans.',
      },
      {
        title: 'Ongoing Stewardship',
        description: 'Safety equipment requires continuous upkeep. We encourage regular inspections and refresher drills so readiness never lapses.',
      },
      {
        title: 'Local Responsiveness',
        description: 'Rooted right here in Walking Street, Ranchi, we offer prompt on-site visits and dependable local service across Jharkhand.',
      },
    ],
    directorMessage: {
      name: 'Sabir Hussain',
      role: 'Director, Safety Management Solutions',
      location: 'Ranchi, Jharkhand',
      photoPlaceholderText: 'Director Portrait [Sabir Hussain]',
      quote: 'Safety is not something you purchase once and forget. It is an active culture that starts with personal vigilance and clear preparation. When an emergency happens, seconds decide outcomes. Our commitment at SMS is to ensure your people know where to go, what to do, and have the right equipment ready to save lives.',
    },
    logoMeaning: {
      title: 'The Symbolism of Our Logo',
      lead: 'Every element in the Safety Management Solutions emblem represents a cornerstone of our philosophy:',
      elements: [
        {
          element: 'The Protective Shield',
          meaning: 'Represents shelter, institutional security, and our defense of human life and premises against preventable harm.',
        },
        {
          element: 'The Running Figure',
          meaning: 'Symbolizes escape, rapid life safety, and the vital importance of clear, unobstructed emergency evacuation routes.',
        },
        {
          element: 'The Upward Arrow',
          meaning: 'Denotes continuous progress, proactive vigilance, and lifting community safety benchmarks to higher standards.',
        },
        {
          element: 'The Orange Arc',
          meaning: 'A bold signal for active alertness, responsiveness, and prompt action when seconds matter most.',
        },
        {
          element: 'SMS Lettering',
          meaning: 'Anchors our identity in clean navy typography, representing stability, authority, and professional trust.',
        },
      ],
    },
  },

  testimonialsSection: {
    // Shipped as a clean, honest placeholder container awaiting real client feedback
    enabled: true,
    isPlaceholder: true,
    title: 'Client Experiences & Case Notes',
    placeholderNotice: '[Placeholder note: Real client testimonials and case reviews will be published here following verified on-site engagements. SMS does not publish fabricated reviews.]',
  },

  contactPage: {
    hero: {
      title: 'Get in Touch with SMS',
      subtitle: 'Schedule a free premises walkthrough, request a safety equipment quotation, or discuss emergency evacuation planning for your facility in Ranchi and Eastern India.',
    },
    formTitle: 'Request a Consultation or Quotation',
    formSubtitle: 'Fill out the form below and our team will get back to you promptly within 24 hours.',
    servicesList: [
      'Emergency Escape Route Planning',
      'Safety Equipment Supply & Maintenance',
      'Safety Awareness & Posters',
      'General Safety Walkthrough & Consulting',
      'Complete Facility Safety Package',
    ],
    officeInfo: {
      title: 'Ranchi Head Office',
      locationDesc: 'Located centrally on Walking Street, directly opposite Capitol Hill on Main Road.',
    },
  },

  footer: {
    tagline: 'Safety starts with you.',
    description: 'Workplace and community safety solutions in Ranchi, Jharkhand. Helping organisations build clear evacuation routes, equip reliable safety gear, and foster everyday safety awareness.',
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'Our Services', href: '/services/' },
      { label: 'Escape Route Planning', href: '/evacuation-planning/' },
      { label: 'Safety Equipment', href: '/safety-equipment/' },
      { label: 'Awareness & Events', href: '/awareness-events/' },
      { label: 'About Company', href: '/about/' },
      { label: 'Contact Us', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
    legalNotice: 'All services provided are aligned with good safety practices and premises-tailored recommendations. Legal and regulatory compliance remains the respective statutory responsibility of facility owners.',
    copyright: '© 2026 Safety Management Solutions (SMS). All rights reserved.',
  },

  privacyPolicy: {
    title: 'Privacy Policy (Draft for Legal Review)',
    lastUpdated: 'October 2026',
    draftNotice: '[DRAFT NOTICE: This policy document is a baseline template provided for preliminary operational use and remains subject to formal legal review.]',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'When you submit an inquiry through our website, contact us via phone, or message us on WhatsApp, we collect basic contact details including your name, organization name, phone number, email address, city, and details regarding your safety requirements.',
      },
      {
        title: '2. How We Use Your Information',
        content: 'We use the information you provide solely to respond to your consultation requests, prepare safety equipment quotations, coordinate site visits in Ranchi and neighboring districts, and provide customer support.',
      },
      {
        title: '3. Data Sharing & Third Parties',
        content: 'Safety Management Solutions does not sell, rent, or trade your personal or business contact details with external marketing third parties. Information may only be shared with verified logistics partners strictly when necessary to deliver safety equipment to your site.',
      },
      {
        title: '4. Contact Regarding Data',
        content: 'For any questions regarding your contact details or to request removal from our communications list, please contact Info@safetymanagementsolutions.in or call +91 9334701135.',
      },
    ],
  },

  termsOfService: {
    title: 'Terms of Service (Draft for Legal Review)',
    lastUpdated: 'October 2026',
    draftNotice: '[DRAFT NOTICE: These terms represent a standard commercial framework and are subject to formal legal customization.]',
    sections: [
      {
        title: '1. Scope of Services',
        content: 'Safety Management Solutions provides safety awareness training, emergency escape route planning, safety equipment supply and management, and general safety walkthrough advisory. All guidance is premises-tailored and aligned with recognized good safety practices.',
      },
      {
        title: '2. Advisory Nature & Premises Responsibility',
        content: 'Our walkthroughs, evacuation diagrams, and suggestions are practical recommendations intended to improve life safety preparedness. Facility management retains statutory responsibility for structural integrity, electrical loads, and adherence to local municipal regulations.',
      },
      {
        title: '3. Equipment Supply & Maintenance',
        content: 'Safety equipment provided by SMS must be handled and operated according to standard manufacturer operating instructions. Routine inspections and servicing are vital to ensure continuous operational readiness.',
      },
      {
        title: '4. Jurisdiction',
        content: 'Any disputes arising out of services provided by Safety Management Solutions shall be subject to the exclusive jurisdiction of the competent courts in Ranchi, Jharkhand, India.',
      },
    ],
  },
};
