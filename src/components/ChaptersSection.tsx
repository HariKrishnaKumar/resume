import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Code, Brain, Rocket } from 'lucide-react';
import SandTransitionImage from './SandTransitionImage';

const chaptersData = [
  {
    name: 'Face Recognition System',
    description: 'Real-time face recognition with 92% accuracy using OpenCV, DeepFace, and TensorFlow.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'DeepFace'],
  },
  {
    name: 'Web Development Projects',
    description: 'Dynamic websites for Vignatri Events and NGO Temple Portal with full-stack integration.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    name: 'Python & Machine Learning',
    description: 'Expertise in TensorFlow, Scikit-learn, OpenCV, NumPy, and Pandas for data-driven solutions.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'NumPy'],
  },
  {
    name: 'Technical Trainer',
    description: 'Guiding students at Yajurvedh in programming fundamentals and machine learning concepts.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    technologies: ['Teaching', 'Mentoring', ' curriculum Design'],
  },
  {
    name: 'Backend & Tools',
    description: 'FastAPI, SQL databases, Git version control, and Google Cloud certifications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    technologies: ['FastAPI', 'SQL', 'Git', 'Google Cloud'],
  },
];

function ChaptersSection() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChapter((prev) => (prev + 1) % chaptersData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white flex flex-col z-30">
      {/* Overlapping Image */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[160vw] md:w-[1100px] pointer-events-none z-0"
        initial={{ y: '-65%', opacity: 0 }}
        whileInView={{ y: '-78%', opacity: 1 }}
        viewport={{ margin: '100px' }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
          alt="Code abstract"
          className="w-full h-auto object-cover opacity-40 mix-blend-screen"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Heading Area */}
      <div className="px-8 md:px-16 pt-32 md:pt-48 mb-16 z-10">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12">
          {/* Left - Main Heading */}
          <motion.h2
            className="text-[1.8rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] leading-[1.15] font-medium tracking-tight text-white max-w-[800px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafted with precision & passion for technology{' '}
            <span className="inline-flex gap-2 md:gap-3 align-middle mx-2 md:mx-4 translate-y-[-4px]">
              {[Code, Brain, Rocket].map((Icon, i) => (
                <span
                  key={i}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-gray-600 bg-black text-gray-400 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
                >
                  <Icon size={22} />
                </span>
              ))}
            </span>{' '}
            & innovation.
          </motion.h2>

          {/* Right - Tagline + Pills */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[9px] md:text-[10px] font-mono tracking-widest text-gray-400 uppercase leading-relaxed">
              I DON'T JUST BUILD SOFTWARE<br />
              I CRAFT DIGITAL EXPERIENCES
            </p>
            <div className="flex gap-3">
              {['Innovative', 'Efficient', 'Scalable'].map((pill) => (
                <span
                  key={pill}
                  className="px-5 py-2 rounded-full border border-gray-600 text-[9px] font-mono tracking-widest uppercase text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Two-Column Panel */}
      <div className="border-t border-gray-800 flex flex-col md:flex-row">
        {/* Left Panel - Image */}
        <div className="w-full md:w-[35%] border-b md:border-b-0 md:border-r border-gray-800 min-h-[400px] md:min-h-[500px] relative">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <span className="text-gray-500 text-xl tracking-[0.3em] absolute top-8 left-8">***</span>

            <AnimatePresence mode="wait">
              <SandTransitionImage
                key={activeChapter}
                src={chaptersData[activeChapter].image}
                alt={chaptersData[activeChapter].name}
                className="w-[80%] h-[80%]"
              />
            </AnimatePresence>

            {/* Chapter Counter */}
            <div className="absolute bottom-8 left-8 flex items-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeChapter}
                  className="text-[10px] font-mono tracking-widest text-[#888] uppercase"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(activeChapter + 1).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <span className="text-[#333]">/</span>
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase">
                {String(chaptersData.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel - Chapter List */}
        <div className="w-full md:w-[65%] flex flex-col">
          {/* Top Bar */}
          <div className="border-b border-gray-800 p-8 flex justify-between items-center">
            <p className="text-[10px] font-mono text-gray-400 tracking-widest">
              Explore the past. Understand the present.
            </p>
            <AnimatePresence mode="wait">
              <motion.span
                key={activeChapter}
                className="text-[10px] font-mono text-gray-500 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Chapter {String(activeChapter + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Chapter List */}
          {chaptersData.map((chapter, index) => (
            <motion.div
              key={index}
              className={`border-b border-gray-800/80 py-8 px-8 cursor-pointer transition-colors duration-300 ${
                activeChapter === index
                  ? 'text-white'
                  : 'text-[#444] hover:text-[#999]'
              }`}
              onClick={() => setActiveChapter(index)}
              whileHover={{ x: 4 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl md:text-[2rem] font-medium tracking-tight">
                    {chapter.name}
                  </h3>
                  <p className="text-[12px] text-gray-500 mt-2 max-w-[500px]">
                    {chapter.description}
                  </p>
                  <div className="flex gap-2 mt-3">
                    {chapter.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono tracking-wider uppercase text-gray-600 border border-gray-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <AnimatePresence>
                  {activeChapter === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <ArrowUpRight size={22} strokeWidth={1} className="text-gray-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="h-[1px] bg-gray-800" />
      <p className="px-8 py-8 text-[10px] font-mono tracking-widest text-gray-500 uppercase bg-[#0a0a0a]">
        BUILDING THE FUTURE WITH CODE
      </p>
    </section>
  );
}

export default ChaptersSection;
