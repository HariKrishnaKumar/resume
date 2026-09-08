import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  showVideo: boolean;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const letterBlock = {
  initial: { y: 120, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const navLinks = ['Work', 'Skills', 'Projects', 'Contact'];

function Hero({ showVideo, onMenuToggle, isMenuOpen }: HeroProps) {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Freelance Developer', 'ML Engineer', 'Technical Trainer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Header with Logo */}
      <motion.header
        className="pt-6 px-6 md:px-16 z-20 relative"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        <motion.h1
          className="w-full"
          variants={{
            animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
        >
          <svg viewBox="0 0 900 100" className="w-full fill-[#111]">
            {/* Letter H */}
            <motion.g variants={letterBlock}>
              <polygon points="0,0 14,0 14,100 0,100" />
              <polygon points="100,0 114,0 114,100 100,100" />
              <polygon points="14,43 100,43 100,57 14,57" />
            </motion.g>
            {/* Letter K */}
            <motion.g variants={letterBlock} transform="translate(140,0)">
              <polygon points="0,0 14,0 14,100 0,100" />
              <polygon points="14,50 80,0 95,0 14,55" />
              <polygon points="14,50 80,100 95,100 14,55" />
            </motion.g>
          </svg>
        </motion.h1>
      </motion.header>

      {/* Sub-Nav Bar */}
      <motion.div
        className="flex justify-between items-start mt-8 px-6 md:px-16 z-20 relative"
        initial="initial"
        animate="animate"
        variants={fadeUp}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left - Name */}
        <div className="w-[15%] hidden md:block">
          <p className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-gray-800 leading-relaxed">
            Hari<br />Krishna<br />Kumar
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex w-[5%] items-start pt-1">
          <ArrowRight size={14} strokeWidth={1} className="text-gray-400" />
        </div>

        {/* Center - Tagline */}
        <div className="flex-1 md:w-[30%]">
          <p className="text-[11px] md:text-[12px] font-mono tracking-[0.15em] text-gray-800 leading-relaxed">
            Building intelligent solutions through code, machine learning, and creative development.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex w-[5%] items-start pt-1">
          <ArrowRight size={14} strokeWidth={1} className="text-gray-400" />
        </div>

        {/* Right - Nav Links */}
        <div className="hidden md:flex w-[15%] flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-gray-800 hover:text-black hover:underline transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={onMenuToggle}
          className="z-60 flex flex-col gap-[6px] p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            className="block w-8 h-[1.5px] bg-black origin-center"
            animate={isMenuOpen ? { rotate: 45, y: 3.75 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-8 h-[1.5px] bg-black origin-center"
            animate={isMenuOpen ? { rotate: -45, y: -3.75 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.div>

      {/* Background Video */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
              poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80"
            >
              <source
                src="https://videos.pexels.com/video-files/5765440/5765440-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Sidebar Content */}
      <motion.div
        className="px-10 md:px-16 mt-20 sm:mt-28 md:mt-32 w-[320px] z-10 relative"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
        }}
      >
        {/* Section Indicator */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono">01</span>
          <div className="w-16 h-[1.5px] bg-black/20" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="text-[3.5rem] md:text-[5rem] font-normal tracking-tight leading-[1] mb-6"
        >
          BUILD<br />
          DIGITAL<br />
          SOLUTIONS
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-[13px] md:text-[14px] text-gray-700 w-[240px] leading-[1.6] mb-8"
        >
          I craft intelligent applications using Python, machine learning, and modern web technologies.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeUp}>
          <button className="group relative bg-[#1a1a1a] px-6 py-3.5 border border-[#1a1a1a] rounded-md shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-[0.5px] hover:shadow-[3px_3px_0px_rgba(17,17,17,0.5)] active:translate-y-0 active:shadow-sm">
            <span className="absolute inset-0 bg-[#fcfcfc] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative flex items-center gap-3">
              <span className="text-[15px] font-medium text-white group-hover:text-[#111] transition-colors duration-500">
                Let's Talk
              </span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="text-white group-hover:text-[#111] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500"
              />
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Right Sidebar (Desktop) */}
      <motion.div
        className="hidden md:flex w-[200px] mt-12 md:mt-20 absolute right-16 top-[45%] z-10 flex-col gap-6"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } },
        }}
      >
        {/* Rotating Role */}
        <motion.div variants={fadeUp}>
          <p className="text-[10px] font-bold font-mono tracking-widest uppercase text-gray-500 mb-1">
            Currently
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRole}
              className="text-[13px] font-medium text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {roles[currentRole]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="space-y-4">
          <div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Projects</p>
            <p className="text-[13px] font-medium">5+</p>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Skills</p>
            <p className="text-[13px] font-medium">10+</p>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Certs</p>
            <p className="text-[13px] font-medium">5</p>
          </div>
        </motion.div>

        {/* View Details Button */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center group-hover:border-black group-hover:bg-[#111] transition-all duration-300">
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="text-gray-600 group-hover:text-white transition-colors duration-300"
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-gray-600 group-hover:text-black transition-colors">
            View Details
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom-Left Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-[2.5rem] md:left-[4rem] hidden md:flex items-center gap-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
          <div className="flex gap-[4px]">
            <div className="w-[1px] h-[12px] bg-gray-600" />
            <div className="w-[1px] h-[12px] bg-gray-600" />
          </div>
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 font-semibold">
          Scroll to explore
        </span>
      </motion.div>

      {/* Big Background Text */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-mega font-bold text-center text-[#111] select-none">
          BUILD
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
