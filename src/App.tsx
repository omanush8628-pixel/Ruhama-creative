/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

// --- Types ---

type Category = 'All' | 'Graphic Design' | 'Video Editing' | 'Digital Marketing' | 'AI' | 'MS Office' | 'Calligraphy';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

// --- Data ---

const CATEGORIES: Category[] = [
  'All', 
  'Graphic Design', 
  'Video Editing', 
  'Digital Marketing', 
  'AI', 
  'MS Office', 
  'Calligraphy'
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Wireless Headphone Ad',
    category: 'Graphic Design',
    image: 'input_file_0.png',
    description: 'Modern product advertisement for Best Bits headphones.'
  },
  {
    id: 2,
    title: 'HelloChef Brinjal Post',
    category: 'Graphic Design',
    image: 'input_file_1.png',
    description: 'Creative social media post for food branding.'
  },
  {
    id: 3,
    title: 'Tang Plus Product Design',
    category: 'Graphic Design',
    image: 'input_file_2.png',
    description: 'Realistic product mockup and label design.'
  },
  {
    id: 4,
    title: 'Adidas Special Collection',
    category: 'Graphic Design',
    image: 'input_file_3.png',
    description: 'High-impact footwear advertisement for Adidas.'
  },
  {
    id: 5,
    title: 'Luxury Perfume Branding',
    category: 'Graphic Design',
    image: 'input_file_4.png',
    description: 'Elegant promotional design for Shalimar perfume.'
  },
  {
    id: 6,
    title: 'HelloChef Onion Post',
    category: 'Graphic Design',
    image: 'input_file_5.png',
    description: 'Minimalist social media branding for fresh produce.'
  },
  {
    id: 7,
    title: 'HelloChef Garlic Post',
    category: 'Graphic Design',
    image: 'input_file_6.png',
    description: 'Clean and professional food marketing content.'
  },
  {
    id: 8,
    title: 'Iftar Mahfil Poster',
    category: 'Graphic Design',
    image: 'input_file_7.png',
    description: 'Traditional event poster design for Iftar Mahfil.'
  },
  {
    id: 9,
    title: 'Islamic Conference Poster',
    category: 'Graphic Design',
    image: 'input_file_8.png',
    description: 'Professional typography-focused conference poster.'
  },
  {
    id: 10,
    title: 'Barakah Point Poster',
    category: 'Graphic Design',
    image: 'input_file_9.png',
    description: 'Event branding and poster design for Barakah Point.'
  },
  {
    id: 11,
    title: 'Cinematic Travel Reel',
    category: 'Video Editing',
    image: 'https://picsum.photos/seed/video1/800/600',
    description: 'Dynamic editing with custom transitions.'
  },
  {
    id: 12,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    image: 'https://picsum.photos/seed/marketing1/800/600',
    description: 'Viral growth strategy for an e-commerce brand.'
  },
  {
    id: 13,
    title: 'AI Image Generation',
    category: 'AI',
    image: 'https://picsum.photos/seed/ai1/800/600',
    description: 'Custom stable diffusion models for art.'
  },
  {
    id: 14,
    title: 'Financial Dashboard',
    category: 'MS Office',
    image: 'https://picsum.photos/seed/office1/800/600',
    description: 'Complex Excel automation and visualization.'
  },
  {
    id: 15,
    title: 'Traditional Script',
    category: 'Calligraphy',
    image: 'https://picsum.photos/seed/calligraphy1/800/600',
    description: 'Hand-lettered wedding invitations.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <a href="#home" className="text-xl font-black tracking-tighter uppercase hover:opacity-80 transition-opacity">
          RUHAMA <span className="text-brand-accent">CREATIVE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[0.85rem] font-bold uppercase tracking-widest text-brand-secondary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-black text-[0.85rem] font-black uppercase tracking-widest rounded-sm hover:bg-brand-accent hover:text-white transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-secondary hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[0.7rem] font-black tracking-[0.2em] uppercase text-brand-secondary mb-8">
            Creative Agency & Studio
          </span>
          <h1 className="text-7xl md:text-[8rem] font-black leading-[0.85] tracking-tighter mb-10 uppercase text-balance">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
              RUHAMA CREATIVE
            </span>
          </h1>
          <p className="text-lg text-brand-secondary mb-12 leading-relaxed max-w-xl font-medium">
            A multidisciplinary design studio crafting digital excellence through graphic design, AI innovation, and creative marketing strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio" 
              className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-sm hover:bg-brand-accent hover:text-white transition-all"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-sm tracking-widest rounded-sm hover:bg-white/10 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">Selected Works</h2>
            <p className="text-brand-secondary max-w-md font-medium">
              A curated collection of projects across various creative disciplines.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-accent text-white' 
                    : 'bg-white/5 text-brand-secondary border border-white/10 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-card-bg rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-brand-accent mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                  <p className="text-[0.8rem] text-brand-secondary line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">Let's create <br /> <span className="text-brand-accent">excellence.</span></h2>
            <p className="text-lg text-brand-secondary mb-16 font-medium">
              A multidisciplinary design studio crafting digital excellence through graphic design, AI innovation, and creative marketing strategies.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-brand-accent border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[0.65rem] text-brand-secondary uppercase tracking-[0.2em] font-black mb-1">Email Us</p>
                  <p className="text-xl font-bold">omanush8628@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-brand-accent border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[0.65rem] text-brand-secondary uppercase tracking-[0.2em] font-black mb-1">Call Us</p>
                  <p className="text-xl font-bold">01609434924</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-card-bg p-10 md:p-14 rounded-xl border border-white/10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary">Full Name</label>
                <input 
                  type="text" 
                  placeholder="JOHN DOE"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors font-bold uppercase text-sm tracking-widest"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary">Email Address</label>
                <input 
                  type="email" 
                  placeholder="JOHN@EXAMPLE.COM"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors font-bold uppercase text-sm tracking-widest"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary">Message</label>
              <textarea 
                rows={4}
                placeholder="TELL US ABOUT YOUR PROJECT..."
                className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none font-bold uppercase text-sm tracking-widest"
              />
            </div>
            <button className="w-full py-5 bg-white text-black font-black uppercase text-sm tracking-[0.2em] rounded-sm hover:bg-brand-accent hover:text-white transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-xl font-black uppercase tracking-tighter">
          RUHAMA <span className="text-brand-accent">CREATIVE</span>
        </div>
        
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-brand-secondary">
          © {new Date().getFullYear()} RUHAMA CREATIVE. ALL RIGHTS RESERVED.
        </p>

        <div className="flex items-center gap-8">
          <a href="#" className="text-[0.7rem] font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-[0.7rem] font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors">Behance</a>
          <a href="#" className="text-[0.7rem] font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
