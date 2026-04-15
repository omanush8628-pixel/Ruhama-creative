/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Facebook,
  Phone,
  MessageCircle,
  ArrowRight,

// --- Types ---

type Category = 'Recent' | 'Graphic Design' | 'Video Editing' | 'Digital Marketing' | 'AI' | 'Calligraphy';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

// --- Data ---

const CATEGORIES: Category[] = [
  'Recent',
  'Graphic Design', 
  'Video Editing', 
  'Digital Marketing', 
  'AI',
  'Calligraphy'
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Metallic Tin Can',
    category: 'Graphic Design',
    image: '/close-up-metallic-tin-can.jpg',
    description: 'Modern product advertisement for Best Bits headphones.'
  },
  {
    id: 2,
    title: 'Brinjal Social Post',
    category: 'Graphic Design',
    image: '/begun add.jpg',
    description: 'Creative social media post for food branding.'
  },
  {
    id: 3,
    title: 'Product Mockup',
    category: 'Graphic Design',
    image: '/04 (1).jpg',
    description: 'Realistic product mockup and label design.'
  },
  {
    id: 4,
    title: 'Footwear Ad',
    category: 'Graphic Design',
    image: '/JUTA.jpg',
    description: 'High-impact footwear advertisement for Adidas.'
  },
  {
    id: 5,
    title: 'Perfume Branding',
    category: 'Graphic Design',
    image: '/perfume.jpg',
    description: 'Elegant promotional design for Shalimar perfume.'
  },
  {
    id: 6,
    title: 'Onion Social Post',
    category: 'Graphic Design',
    image: '/roshun add.jpg',
    description: 'Minimalist social media branding for fresh produce.'
  },
  {
    id: 7,
    title: 'Garlic Social Post',
    category: 'Graphic Design',
    image: '/peyaj add.jpg',
    description: 'Clean and professional food marketing content.'
  },
  {
    id: 8,
    title: 'Iftar Mahfil Poster',
    category: 'Graphic Design',
    image: '/iftar png.jpg',
    description: 'Traditional event poster design for Iftar Mahfil.'
  },
  {
    id: 9,
    title: 'Islamic Conference Poster',
    category: 'Graphic Design',
    image: '/1231FFjhhjF130fgghgffgfv3fHssommelonj.jpg',
    description: 'Professional typography-focused conference poster.'
  },
  {
    id: 10,
    title: 'Barakah Point Poster',
    category: 'Graphic Design',
    image: 'https://picsum.photos/seed/event/800/600',
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[0.7rem] font-black tracking-[0.2em] uppercase text-brand-secondary mb-6">
            Creative Agency & Studio
          </span>
          <h1 className="text-5xl md:text-[8rem] font-black leading-[0.9] tracking-tighter mb-8 uppercase text-balance">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
              RUHAMA CREATIVE
            </span>
          </h1>
          <p className="text-xl font-bold mb-4 text-white">
            আপনার সৃজনশীলতার সঠিক ঠিকানা।
          </p>
          <p className="text-base md:text-lg text-brand-secondary mb-10 leading-relaxed max-w-xl font-medium">
            আমরা গ্রাফিক ডিজাইন, এআই ইনোভেশন এবং সৃজনশীল মার্কেটিং কৌশলের মাধ্যমে আপনার ব্র্যান্ডকে ডিজিটাল শ্রেষ্ঠত্বে পৌঁছে দিতে কাজ করি।
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
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const filteredItems = useMemo(() => {
    if (!activeCategory) return [];
    if (activeCategory === 'Recent') return PORTFOLIO_ITEMS.slice(-3); // Assuming last 3 are recent
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Selected Works</h2>
            <p className="text-brand-secondary max-w-md font-medium text-sm md:text-base">
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
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-card-bg rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/20"
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
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    option: 'Graphic Design'
  });
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', option: 'Graphic Design' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Let's create <br /> <span className="text-brand-accent">excellence.</span></h2>
            <p className="text-base md:text-lg text-brand-secondary mb-12 font-medium">
              আপনার প্রজেক্ট বা আইডিয়া নিয়ে আমাদের সাথে কথা বলুন। আমরা আপনার স্বপ্নকে বাস্তবে রূপ দিতে প্রস্তুত।
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-brand-accent border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[0.65rem] text-brand-secondary uppercase tracking-[0.2em] font-black mb-1">Email Us</p>
                  <p className="text-xl font-bold">ruhamacreative2026@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-brand-accent border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[0.65rem] text-brand-secondary uppercase tracking-[0.2em] font-black mb-1">Call Us</p>
                  <p className="text-xl font-bold">01609434924 / 01632846396</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card-bg p-10 md:p-14 rounded-xl border border-white/10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="JOHN DOE"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors font-bold uppercase text-sm tracking-widest"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="JOHN@EXAMPLE.COM"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors font-bold uppercase text-sm tracking-widest"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary">Service</label>
              <select
                name="option"
                value={formData.option}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors font-bold uppercase text-sm tracking-widest"
              >
                <option value="Graphic Design">Graphic Design</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="AI">AI</option>
                <option value="MS Office">MS Office</option>
                <option value="Calligraphy">Calligraphy</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary">Message</label>
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="TELL US ABOUT YOUR PROJECT..."
                className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none font-bold uppercase text-sm tracking-widest"
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-5 bg-white text-black font-black uppercase text-sm tracking-[0.2em] rounded-sm hover:bg-brand-accent hover:text-white transition-all disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-500 text-center font-bold">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 text-center font-bold">Failed to send message. Please try again.</p>}
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
          <a href="https://wa.me/qr/NYVE22AGKZXFK1" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61580402938657" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors font-black text-sm uppercase">
            Be
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
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
