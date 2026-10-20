/**
 * Safety Management Solutions (SMS)
 * Centralized Site Content Matrix
 * 
 * Note: All text is isolated here so that Hindi ('hi') or additional language
 * dictionaries can be added seamlessly in the future without altering UI components.
 * 
 * Adheres strictly to user instructions:
 * - No invented business hours, coordinates, response times, or "free" promises.
 * - [confirm] flags used where specific operational data is pending from the client.
 * - No mentions of ISI/EN standards, refilling, hydrostatic tests, live fire, "safety engineers", stretchers, or eyewash stations.
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
  titleHindi: string;
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
    region: 'Ranchi, Jharkhand',
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
    businessHoursPlaceholder: '[confirm: operating business hours]',
    responseTimePlaceholder: '[confirm: inquiry response timeframe]',
    mapCoordinatesPlaceholder: '[confirm: exact GPS map coordinates]',
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
    kicker: 'Workplace & Community Safety in Ranchi & Jharkhand',
    headline: 'Practical Safety Solutions for Workplaces, Schools & Facilities.',
    subheadline: 'SMS delivers tailored safety awareness programs, floor-plan evacuation mapping, basic safety equipment supply and management, and practical risk walkthroughs across Jharkhand and neighboring regions.',
    primaryCta: 'Request a Safety Consultation',
    secondaryCta: 'Explore Core Services',
    trustNote: 'Tailored specifically to your premises · Aligned with good safety practice',
  },

  trustStrip: [
    { label: 'Premises-Tailored', detail: 'Practical walkthroughs suited to your exact layout' },
    { label: 'Equipment Upkeep', detail: 'Supply and ongoing management under one roof' },
    { label: 'Creative Awareness', detail: 'Relatable bilingual training & visual poster campaigns' },
    { label: 'Local In Ranchi', detail: 'Prompt regional presence across Jharkhand' },
  ],

  servicesOverview: [
    {
      id: 'escape-planning',
      title: 'Emergency Escape Route Planning',
      slug: '/evacuation-planning/',
      category: 'Premises Architecture',
      summary: 'Premises-specific evacuation maps, clear exit signage layouts, assembly point designations, and structured drill guidance.',
      tag: 'Floor Plans & Exits',
      aspect: 'col-span-12 lg:col-span-7',
      imageAlt: 'Emergency Evacuation Map mounted on an Indian corporate facility wall [Photo: swap with your photo later]',
    },
    {
      id: 'safety-equipment',
      title: 'Safety Equipment Supply & Upkeep',
      slug: '/safety-equipment/',
      category: 'Equipment Management',
      summary: 'Supply and ongoing management of basic safety equipment including fire extinguishers, first-aid kits, PPE, and safety signage.',
      tag: 'Supply & Management',
      aspect: 'col-span-12 lg:col-span-5',
      imageAlt: 'Wall-mounted fire extinguisher and safety gear in a modern workplace [Photo: swap with your photo later]',
    },
    {
      id: 'safety-awareness',
      title: 'Safety Awareness & Training',
      slug: '/awareness-events/',
      category: 'Education & Campaigns',
      summary: 'Creative awareness posters, bilingual campaign material, and practical training programs for employees, students, and workers.',
      tag: 'Bilingual Training',
      aspect: 'col-span-12 lg:col-span-5',
      imageAlt: 'Indian workplace safety training workshop and bilingual poster display [Photo: swap with your photo later]',
    },
    {
      id: 'safety-consulting',
      title: 'General Safety Consulting',
      slug: '/services/',
      category: 'On-Site Walkthroughs',
      summary: 'On-site risk walkthroughs and straightforward practical advice for workplaces, schools, offices, factories, and public spaces.',
      tag: 'Site Advisory',
      aspect: 'col-span-12 lg:col-span-7',
      imageAlt: 'Professional site walkthrough inspection inside an Indian facility [Photo: swap with your photo later]',
    },
  ],

  whySms: {
    title: 'Why Organisations Choose SMS',
    lead: 'Straightforward, practical safety solutions designed for real building layouts and daily operational realities in Jharkhand and Eastern India.',
    points: [
      {
        num: '01',
        title: 'Practical, Not Academic',
        description: 'We do not generate thick, unreadable reports that sit on a shelf. We focus on visible floor plans, functional equipment, clear signage, and educated staff.',
      },
      {
        num: '02',
        title: 'Tailored to Your Premises',
        description: 'Every building is unique. We walk your premises, identify physical choke points, and design evacuation paths and equipment placement tailored to your reality.',
      },
      {
        num: '03',
        title: 'Creative, Relatable Awareness',
        description: 'Safety posters and sessions that actually connect with people. Available in Hindi and English with crisp visuals designed to be understood at a glance.',
      },
      {
        num: '04',
        title: 'Equipment Supply & Ongoing Upkeep',
        description: 'We do not just drop off safety equipment and leave. We help you establish ongoing inspection schedules and equipment management in one place.',
      },
    ],
  },

  howWeWork: {
    title: 'Our 4-Step Practical Safety Workflow',
    lead: 'A methodical sequence designed to build emergency readiness without disrupting your day-to-day operations.',
    steps: [
      {
        num: '01',
        name: 'Assess',
        kicker: 'On-site Walkthrough',
        description: 'We visit your facility, walk through active work areas, review exit points, inspect existing equipment, and note practical vulnerabilities.',
        focus: 'Physical site inspection & hazard identification',
      },
      {
        num: '02',
        name: 'Plan',
        kicker: 'Tailored Action Map',
        description: 'We draft your premises evacuation layout, define optimal signage placement, recommend necessary basic equipment, and outline training priorities.',
        focus: 'Evacuation mapping & signage layout',
      },
      {
        num: '03',
        name: 'Implement',
        kicker: 'Installation & Training',
        description: 'We position equipment, mount high-visibility signage, install evacuation maps at key decision points, and conduct staff training sessions.',
        focus: 'Equipment delivery & workforce training',
      },
      {
        num: '04',
        name: 'Sustain',
        kicker: 'Routine Management & Drills',
        description: 'We assist with scheduled equipment status checks, refresher awareness campaigns, and guided mock evacuation drills to keep everyone prepared.',
        focus: 'Ongoing checks & preparedness drills',
      },
    ],
  },

  sectorsServed: [
    { name: 'Industrial Sites & Factories', context: 'Production floors, machinery spaces & logistics routes' },
    { name: 'Schools, Colleges & Hostels', context: 'Classroom corridors, stairwells & campus muster zones' },
    { name: 'Commercial Offices & IT Parks', context: 'Multi-floor office layouts, server rooms & exit corridors' },
    { name: 'Hospitals & Healthcare Facilities', context: 'Patient corridors, stairways & emergency exit pathways' },
    { name: 'Residential Societies & High-Rises', context: 'Common stairwells, parking areas & resident awareness' },
    { name: 'Warehouses & Logistics Hubs', context: 'Loading bays, storage aisles & high-rack safety zones' },
    { name: 'Government & Administrative Offices', context: 'Public visitor entrances, hall clearances & staff safety' },
  ],

  whoWeServe: [
    { category: 'Industrial Sites & Factories', description: 'Production floors, machinery spaces & logistics routes', icon: 'Factory' },
    { category: 'Schools, Colleges & Hostels', description: 'Classroom corridors, stairwells & campus muster zones', icon: 'GraduationCap' },
    { category: 'Commercial Offices & IT Parks', description: 'Multi-floor office layouts, server rooms & exit corridors', icon: 'Building2' },
    { category: 'Hospitals & Healthcare Facilities', description: 'Patient corridors, stairways & emergency exit pathways', icon: 'Cross' },
    { category: 'Residential Societies & High-Rises', description: 'Common stairwells, parking areas & resident awareness', icon: 'Home' },
    { category: 'Warehouses & Logistics Hubs', description: 'Loading bays, storage aisles & high-rack safety zones', icon: 'Boxes' },
    { category: 'Government & Administrative Offices', description: 'Public visitor entrances, hall clearances & staff safety', icon: 'Landmark' },
  ],

  awarenessShowcase: {
    title: 'Bilingual Creative Safety Posters',
    lead: 'Designed in our brand palette in Hindi and English. Clear visual hierarchy with life-saving takeaways.',
    posters: [
      {
        id: 'fire-pass-method',
        title: 'How to Use a Fire Extinguisher (PASS Method)',
        titleHindi: 'अग्निशामक का उपयोग कैसे करें (PASS विधि)',
        category: 'Fire' as const,
        summary: 'Pull the pin, Aim at base, Squeeze the lever, Sweep side to side. Clear bilingual instructions for rapid action.',
        tagline: 'Act quick, act right.',
        dimensions: 'A2 / A3 / Vinyl Board',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'electrical-hazard-safety',
        title: 'Electrical Safety at Work & Home',
        titleHindi: 'कार्यस्थल और घर पर विद्युत सुरक्षा',
        category: 'Electrical' as const,
        summary: 'Avoid overloading sockets, report exposed wires immediately, and never touch electrical switches with wet hands.',
        tagline: 'Electricity serves you. Respect its danger.',
        dimensions: 'A2 / A3 / Laminated Poster',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'emergency-evacuation-rules',
        title: 'Emergency Evacuation: Do’s & Don’ts',
        titleHindi: 'आपातकालीन निकास: क्या करें और क्या न करें',
        category: 'Workplace' as const,
        summary: 'Never use elevators during fire alarms. Walk calmly, leave heavy belongings behind, and assemble at the marked muster point.',
        tagline: 'In an emergency, every second counts.',
        dimensions: 'A1 / A2 Acrylic Board',
        languagesAvailable: ['Hindi', 'English'],
      },
      {
        id: 'road-commute-safety',
        title: 'Two-Wheeler & Commute Safety',
        titleHindi: 'दोपहिया और दैनिक यात्रा सुरक्षा',
        category: 'Road' as const,
        summary: 'Fasten helmet straps securely, observe premises speed limits, avoid mobile phone distractions while driving.',
        tagline: 'Speed gives a thrill, but safety saves lives.',
        dimensions: 'A2 / A3 Outdoor Flex',
        languagesAvailable: ['Hindi', 'English'],
      },
    ],
  },

  eventsSection: {
    title: 'Workshops, Drills & Awareness Programs',
    lead: 'Interactive sessions led for employees, students, and resident communities.',
    programs: [
      {
        id: 'workplace-workshop',
        title: 'Workplace Emergency Response Workshop',
        category: 'Corporate & Industrial',
        targetGroup: 'Office staff, supervisors, workers',
        duration: '[confirm: workshop duration]',
        format: 'Hands-on practical demonstration + classroom briefing',
        overview: 'Teaches staff how to spot hazards, operate basic fire extinguishers, and lead colleagues to safety.',
        keyTopics: [
          'Classification of fire hazards',
          'Extinguisher discharge mechanics (Hands-on training)',
          'Calling local emergency services with precise site coordinates',
          'Evacuation order and floor sweep procedures',
        ],
      },
      {
        id: 'school-preparedness',
        title: 'Campus Emergency Preparedness Session',
        category: 'Educational Institutions',
        targetGroup: 'School teachers, administrators, staff, students',
        duration: '[confirm: session duration]',
        format: 'Interactive talk + guided evacuation drill',
        overview: 'Instills calm discipline in children and teenagers, training teachers on accountability rosters.',
        keyTopics: [
          'Recognizing alarm sounds and keeping calm',
          'Single-file stairwell descent without pushing',
          'Teacher headcounts at outdoor assembly zones',
        ],
      },
      {
        id: 'residential-drill',
        title: 'Residential High-Rise Fire Safety Session',
        category: 'Residential Societies',
        targetGroup: 'Apartment owners, security staff',
        duration: '[confirm: session duration]',
        format: 'Courtyard demonstration + staircase walk',
        overview: 'Helps housing societies organize resident emergency wardens and clear common corridors.',
        keyTopics: [
          'Common stairwell smoke barriers and door seals',
          'LPG cylinder safety and kitchen caution',
          'Elderly and infant assistance during emergencies',
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
        description: 'Optimal positioning layout for photoluminescent (glow-in-the-dark) exit signs and directional arrows visible in sudden power outages.',
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
        'Weather-resistant framing options [confirm: exact mounting materials]',
        'Photoluminescent substrate option for low-light visibility',
      ],
    },
    faqs: [
      {
        question: 'What information do we need to provide to start an escape plan?',
        answer: 'A copy of your premises layout, CAD drawing, architectural blueprint, or sketch. Our team can also conduct a physical site survey in Ranchi and surrounding areas to map doors, partitions, and staircases.',
      },
      {
        question: 'Where should evacuation maps be placed inside our building?',
        answer: 'Evacuation diagrams should be mounted at every entrance, near passenger lifts, at staircase landings, in common corridors, cafeteria areas, and major intersection points.',
      },
      {
        question: 'Do you help us conduct a practical mock evacuation drill after installing maps?',
        answer: 'Yes, we conduct guided drills where our advisors observe the evacuation flow, measure timing, identify bottlenecks, and present a practical debrief.',
      },
    ],
  },

  equipmentCatalogue: [
    {
      id: 'fire-safety',
      title: 'Fire Safety Equipment',
      description: 'Extinguishers, fire blankets, extinguisher stands, and inspection tags suited for offices, schools, and factories.',
      iconName: 'Flame',
      items: [
        {
          name: 'ABC Dry Powder Fire Extinguisher',
          description: 'Multi-purpose extinguisher suitable for Class A (wood, paper), Class B (flammable liquids), and Class C (gases & electrical hazards).',
          usage: 'Offices, corridors, workshops, residential buildings.',
          specs: 'Stored pressure, brass valve, pressure gauge, wall mounting bracket included.',
        },
        {
          name: 'CO2 Carbon Dioxide Extinguisher',
          description: 'Leaves no residue. Ideal for electrical equipment, server racks, switchboards, and sensitive electronics.',
          usage: 'Electrical panels, data rooms, computer labs, generator rooms.',
          specs: 'High-pressure steel cylinder, non-conductive discharge horn.',
        },
        {
          name: 'Fire Blankets',
          description: 'Woven fiberglass fabric designed to smother small kitchen grease fires or wrap around clothing fires.',
          usage: 'Pantry areas, kitchen facilities, laboratory rooms.',
          specs: 'Quick-release pull tabs, flame-retardant wall casing.',
        },
        {
          name: 'Extinguisher Floor Stands & Covers',
          description: 'Protects cylinders, keeps equipment visible and accessible across high-traffic floors.',
          usage: 'Factory floors, parking lots, generator sheds.',
          specs: 'Powder-coated steel or heavy polyethylene.',
        },
      ],
    },
    {
      id: 'first-aid',
      title: 'First-Aid & Emergency Supplies',
      description: 'Workplace first-aid boxes and basic emergency care supplies for rapid first response.',
      iconName: 'HeartPulse',
      items: [
        {
          name: 'Workplace First-Aid Box',
          description: 'Stocked with sterile gauze, roller bandages, adhesive plaster, antiseptic lotion, burn dressing, and trauma shears.',
          usage: 'Offices, construction sites, manufacturing floors, school clinics.',
          specs: 'Durable wall-mountable lockable metallic box with inventory card.',
        },
      ],
    },
    {
      id: 'ppe',
      title: 'Personal Protective Equipment (PPE)',
      description: 'Protective gear for site supervisors, facility workers, and maintenance teams.',
      iconName: 'HardHat',
      items: [
        {
          name: 'Industrial Safety Helmets with Ratchet Suspension',
          description: 'High-density polyethylene shell protecting against overhead impacts and debris.',
          usage: 'Construction sites, manufacturing plants, maintenance yards.',
          specs: 'Adjustable headband, chin strap included.',
        },
        {
          name: 'High-Visibility Reflective Safety Vests',
          description: 'Bright fluorescent fabric with dual reflective strips ensuring visibility in daylight and vehicle headlights.',
          usage: 'Traffic wardens, site visitors, loading yards, warehouse staff.',
          specs: 'Breathable polyester, velcro front closure.',
        },
        {
          name: 'Impact & Eye Defense Goggles',
          description: 'Wrap-around clear polycarbonate goggles with anti-scratch coating.',
          usage: 'Grinding, chemical handling, school science labs.',
          specs: 'Wide elastic strap, indirect ventilation ports.',
        },
        {
          name: 'Heavy-Duty Work Gloves',
          description: 'Ergonomic gloves offering grip and abrasion protection during material handling.',
          usage: 'Metal fabrication, loading docks, general maintenance.',
          specs: 'Reinforced palms, breathable back.',
        },
      ],
    },
    {
      id: 'signage',
      title: 'Safety Signage & Glow Markers',
      description: 'Photoluminescent exit indicators, assembly point boards, and hazard warning signs.',
      iconName: 'Signpost',
      items: [
        {
          name: 'Photoluminescent Glow-in-the-Dark Exit Signs',
          description: 'Glows for hours during sudden power blackouts, pointing occupants toward stairs and doors.',
          usage: 'Corridors, stairwells, basements, emergency exit doorways.',
          specs: 'Rigid PVC or aluminum sheet, high luminosity grade.',
        },
        {
          name: 'Emergency Assembly Point Outdoor Sign Boards',
          description: 'Large, high-contrast weatherproof signboard marking the designated safe muster area.',
          usage: 'Open grounds, parking areas, perimeter boundary gates.',
          specs: 'Reflective vinyl on heavy-gauge metal with mounting holes.',
        },
        {
          name: 'Hazard & Caution Signage',
          description: 'Clear graphical warning signs identifying high-voltage panels, fire equipment, and caution zones.',
          usage: 'Utility rooms, server rooms, chemical stores, workshop entrances.',
          specs: 'Bilingual English & Hindi text with standard symbols.',
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
        'Safety Management Solutions (SMS) was founded in Ranchi, Jharkhand with a simple conviction: genuine safety does not come from complicated paperwork. Real safety happens when people understand risks, when clear evacuation paths exist, and when functional safety equipment is within reach.',
        'Across our cities, industrial zones, and educational institutions, safety measures are often treated as an afterthought until an incident occurs. SMS was built to bridge this gap by offering practical, accessible, and dependable safety solutions for institutions of every size.',
        'Whether it is a school in Ranchi, a high-rise residential apartment complex, a manufacturing unit, or an office workspace, we approach each facility with careful attention to its unique physical layout, foot traffic, and practical needs.',
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
        description: 'Safety equipment requires continuous upkeep. We encourage regular checks and refresher drills so readiness never lapses.',
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
    enabled: true,
    isPlaceholder: true,
    title: 'Verified Client Experiences',
    placeholderNotice: '[confirm: Real client testimonials and case reviews will be published here following verified on-site engagements. SMS does not publish fabricated reviews.]',
  },

  contactPage: {
    hero: {
      title: 'Get in Touch with SMS',
      subtitle: 'Schedule a premises walkthrough, request an equipment quotation, or discuss emergency evacuation planning for your facility in Ranchi and Eastern India.',
    },
    formTitle: 'Request a Safety Consultation',
    formSubtitle: 'Submit your requirements below and our team will get back to you promptly [confirm: inquiry response timeframe].',
    servicesList: [
      'Emergency Escape Route Planning',
      'Safety Equipment Supply & Ongoing Upkeep',
      'Safety Awareness & Creative Posters',
      'General Safety Walkthrough & Consulting',
    ],
  },

  footer: {
    tagline: 'Safety starts with you.',
    description: 'Workplace and community safety solutions in Ranchi, Jharkhand. Helping organisations design clear evacuation routes, supply reliable safety equipment, and build everyday safety awareness.',
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: 'Escape Planning', href: '/evacuation-planning/' },
      { label: 'Equipment', href: '/safety-equipment/' },
      { label: 'Awareness', href: '/awareness-events/' },
      { label: 'About Company', href: '/about/' },
      { label: 'Contact Us', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
    legalNotice: 'All guidance and services provided are aligned with good safety practices and premises-tailored recommendations. Statutory and regulatory compliance remains the respective responsibility of facility owners.',
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
        content: 'Safety Management Solutions does not sell, rent, or trade your personal or business contact details with external marketing third parties.',
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
