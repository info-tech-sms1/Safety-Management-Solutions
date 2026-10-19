import React, { useState, useEffect } from 'react';
import { normalizePath, routesMeta, AppRoute } from './utils/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { EvacuationPlanningPage } from './pages/EvacuationPlanningPage';
import { SafetyEquipmentPage } from './pages/SafetyEquipmentPage';
import { AwarenessEventsPage } from './pages/AwarenessEventsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { siteContent } from './content/siteContent';

export default function App() {
  const [currentPath, setCurrentPath] = useState<AppRoute>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const [preselectedService, setPreselectedService] = useState<string>('');

  // Sync document title and meta whenever route changes
  useEffect(() => {
    const meta = routesMeta[currentPath];
    if (meta) {
      document.title = meta.title;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.description);
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', meta.title);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', meta.description);
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', meta.canonical);
      }
    }
  }, [currentPath]);

  // Listen for browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    const target = normalizePath(path);
    window.history.pushState({}, '', target);
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultationWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  const renderActivePage = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage 
            onNavigate={navigateTo} 
            onOpenConsultationWithService={handleOpenConsultationWithService}
          />
        );
      case '/services/':
        return (
          <ServicesPage 
            onNavigate={navigateTo} 
            onSelectService={handleOpenConsultationWithService}
          />
        );
      case '/evacuation-planning/':
        return <EvacuationPlanningPage onNavigate={navigateTo} />;
      case '/safety-equipment/':
        return (
          <SafetyEquipmentPage 
            onNavigate={navigateTo} 
            onSelectEquipment={handleOpenConsultationWithService}
          />
        );
      case '/awareness-events/':
        return (
          <AwarenessEventsPage 
            onNavigate={navigateTo} 
            onSelectService={handleOpenConsultationWithService}
          />
        );
      case '/about/':
        return <AboutPage onNavigate={navigateTo} />;
      case '/contact/':
        return <ContactPage initialService={preselectedService} />;
      case '/privacy/':
        return <PrivacyPolicyPage />;
      case '/terms/':
        return <TermsPage />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1B2B]">
      {/* Skip to Content Accessible Link */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F4974C] text-[#0F2C47] font-bold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Persistent Global Header */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Dynamic Viewport */}
      <div id="main-content" className="flex-1">
        {renderActivePage()}
      </div>

      {/* Global Quick Action Floating Elements */}
      <FloatingActions />

      {/* Persistent Institutional Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
