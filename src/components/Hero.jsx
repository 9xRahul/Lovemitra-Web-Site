import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pastel-pink/30">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-start/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-end/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 border border-primary-start/10">
              <Sparkles className="text-primary-start" size={18} />
              <span className="text-sm font-semibold text-gray-700">The #1 Choice for Real Connections</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Find Real <span className="gradient-text">Connections</span>, Not Just Matches
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              LoveMitra uses smart compatibility algorithms to help you find someone who truly understands you. Join millions finding love today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="gradient-button flex items-center justify-center gap-2 group">
                <Heart className="group-hover:fill-white transition-all" size={20} />
                Get Started Now
              </button>
              <button className="outline-button flex items-center justify-center gap-2">
                <Smartphone size={20} />
                Download App
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=love${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-gray-900">10k+ Members</p>
                <p className="text-sm text-gray-500 underline decoration-primary-start cursor-pointer">Find yours today →</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Mockup Placeholder */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 w-full h-6 bg-gray-800 flex justify-center items-end">
                <div className="w-20 h-4 bg-gray-900 rounded-b-xl" />
              </div>
              <div className="w-full h-full bg-white p-4 pt-10">
                <div className="space-y-4">
                  <div className="h-64 rounded-2xl bg-brand-gradient flex items-center justify-center relative overflow-hidden group">
                    <Heart className="text-white opacity-20 group-hover:scale-150 transition-transform duration-500" size={100} />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold">Sarah, 24</p>
                      <p className="text-xs opacity-80">Nature Lover • Artist</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2 h-40 rounded-2xl bg-pastel-pink" />
                    <div className="w-1/2 h-40 rounded-2xl bg-pastel-orange" />
                  </div>
                  <div className="h-20 rounded-2xl border-2 border-dashed border-gray-100 flex items-center justify-center">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100" />
                      <div className="w-10 h-10 rounded-full bg-gray-100" />
                      <div className="w-10 h-10 rounded-full bg-gray-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-20 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <Heart className="text-white fill-white" size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm">New Match!</p>
                  <p className="text-xs text-gray-500">Alex liked you back</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-20 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-start flex items-center justify-center">
                  <Sparkles className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm">Perfect Match</p>
                  <p className="text-xs text-gray-500">98% Compatibility</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
