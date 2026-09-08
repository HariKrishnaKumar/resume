import { motion } from 'motion/react';
import { Code, Brain, Globe, Server, GraduationCap } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const pills = [
  { icon: Code, label: 'Python' },
  { icon: Brain, label: 'Machine Learning' },
  { icon: Globe, label: 'Web Development' },
  { icon: Server, label: 'Backend' },
  { icon: GraduationCap, label: 'Technical Training' },
];

function ExploreSection() {
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-screen bg-[#fcfcfc] flex flex-col items-center pt-24 md:pt-32 pb-0 z-20">
      {/* Section Label */}
      <motion.div
        className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gray-500">[ 02 ]</span>{' '}
        <span className="text-gray-900 font-bold uppercase">Explore My Work</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.1] font-medium tracking-tight text-[#111] max-w-[1000px] text-center px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Building intelligent solutions through code, machine learning, and creative development.
      </motion.h2>

      {/* Action Pills */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 md:mb-24 px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        }}
      >
        {pills.map((pill) => (
          <motion.button
            key={pill.label}
            variants={fadeUp}
            className="group flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider bg-white/50 backdrop-blur-sm text-gray-800 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            <pill.icon size={14} strokeWidth={2} />
            {pill.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Spacer for overlapping image */}
      <div className="min-h-[220px] md:min-h-[450px]" />

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-8 md:pb-12 pointer-events-none hidden md:flex justify-between">
        <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 font-medium">
          I DON'T JUST WRITE CODE.
        </p>
        <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 font-medium">
          BUILD (C) 2026
        </p>
      </div>
    </section>
  );
}

export default ExploreSection;
