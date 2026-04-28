import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Play } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gradient rounded-[3rem] p-12 md:p-24 text-center relative z-10 shadow-2xl">
          {/* Animated Circles */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1] }} 
            transition={{ repeat: Infinity, duration: 10, delay: 1 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" 
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Find Your Soulmate?</h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Download LoveMitra today and start your journey towards meaningful connections. Your perfect match is just a tap away.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all group">
                <Smartphone size={28} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold opacity-60 leading-none">Download on the</p>
                  <p className="text-lg leading-none">App Store</p>
                </div>
              </button>
              
              <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all">
                <Play size={28} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold opacity-60 leading-none">Get it on</p>
                  <p className="text-lg leading-none">Google Play</p>
                </div>
              </button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm font-semibold uppercase tracking-widest">
              <span>★ 4.9 Rating</span>
              <span>•</span>
              <span>10M+ Downloads</span>
              <span>•</span>
              <span>Featured on App Store</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
