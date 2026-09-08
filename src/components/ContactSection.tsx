import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#fcfcfc] py-24 md:py-32 z-20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Section Label */}
        <motion.div
          className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gray-500">[ 04 ]</span>{' '}
          <span className="text-gray-900 font-bold uppercase">Get In Touch</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] font-medium tracking-tight text-[#111] max-w-[900px] mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's Build<br />
          Something<br />
          Together.
        </motion.h2>

        {/* Contact Options */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
        >
          {/* Email */}
          <motion.a
            variants={fadeUp}
            href="mailto:harikrishnamrb@gmail.com"
            className="group flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-black transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-1">
                Email
              </p>
              <p className="text-[14px] font-medium text-gray-800 group-hover:text-black transition-colors">
                harikrishnamrb@gmail.com
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="ml-auto text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={fadeUp}
            href="https://linkedin.com/in/hari-krishna-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-black transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors">
              <Linkedin size={20} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-1">
                LinkedIn
              </p>
              <p className="text-[14px] font-medium text-gray-800 group-hover:text-black transition-colors">
                Hari Krishna Kumar
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="ml-auto text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={fadeUp}
            href="https://github.com/HariKrishnaKumar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-black transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors">
              <Github size={20} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-1">
                GitHub
              </p>
              <p className="text-[14px] font-medium text-gray-800 group-hover:text-black transition-colors">
                @HariKrishnaKumar
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="ml-auto text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </motion.a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="mailto:harikrishnamrb@gmail.com"
            className="group inline-flex items-center gap-3 bg-[#1a1a1a] px-8 py-4 rounded-md text-white font-medium hover:bg-black transition-all duration-300 hover:-translate-y-[0.5px] hover:shadow-[4px_4px_0px_rgba(17,17,17,0.3)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500">
            © 2026 Hari Krishna Kumar
          </p>
          <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500">
            Built with React, Tailwind CSS & Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
