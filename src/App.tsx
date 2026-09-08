import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import ExploreSection from './components/ExploreSection';
import ChaptersSection from './components/ChaptersSection';
import ContactSection from './components/ContactSection';
import MobileMenu from './components/MobileMenu';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#fcfcfc] text-[#111] overflow-x-hidden font-sans">
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>

      <Hero
        showVideo={showVideo}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMenuOpen={isMobileMenuOpen}
      />

      <ExploreSection />

      <ChaptersSection />

      <ContactSection />
    </div>
  );
}

export default App;
