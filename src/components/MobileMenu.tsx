import { motion } from 'motion/react';

interface MobileMenuProps {
  onClose: () => void;
}

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 bg-[#fcfcfc] border-b border-gray-200 shadow-xl md:hidden"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="px-6 py-6 pt-20">
        <nav className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-sm font-mono tracking-[0.2em] uppercase text-gray-800 hover:text-black transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-4">
            Contact
          </p>
          <a
            href="mailto:harikrishnamrb@gmail.com"
            className="text-[13px] text-gray-800 hover:text-black transition-colors"
          >
            harikrishnamrb@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default MobileMenu;
