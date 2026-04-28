import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Flame, Star } from 'lucide-react';

const AppPreview = () => {
  return (
    <section className="py-24 bg-pastel-pink/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Designed for <span className="gradient-text">Delight</span></h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              LoveMitra isn't just another dating app. We've built an interface that feels natural, intuitive, and fun to use. Experience the smoothest swiping and chatting in the game.
            </p>

            <div className="space-y-6">
              {[
                { icon: Flame, title: "Smooth Swiping", desc: "Silky smooth card transitions that make browsing a joy." },
                { icon: MessageSquare, title: "Rich Chat Experience", desc: "Send voice notes, GIFs, and use ice-breakers effortlessly." },
                { icon: Star, title: "Premium Perks", desc: "Unlock features that give you 10x more visibility and matches." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl transition-all hover:bg-white hover:shadow-md">
                  <div className="bg-brand-gradient p-3 rounded-xl h-fit">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Visual background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gradient/5 rounded-full blur-3xl" />
            
            <div className="relative flex gap-4 md:gap-8 transform rotate-6 lg:rotate-12 translate-x-10">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-64 h-[450px] bg-white rounded-[2rem] shadow-2xl p-4 border border-gray-100 flex flex-col"
              >
                <div className="relative flex-grow rounded-2xl overflow-hidden mb-4 group">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" alt="profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-bold">Maya, 22</p>
                    <p className="text-white/80 text-xs">Architect • 2km away</p>
                  </div>
                </div>
                <div className="flex justify-between px-2 pb-2">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-colors cursor-pointer">
                    <Star size={24} />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Heart size={24} fill="white" />
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-64 h-[450px] bg-white rounded-[2rem] shadow-2xl p-4 border border-gray-100 flex flex-col translate-y-12"
              >
                <div className="flex items-center gap-3 mb-6 p-2">
                   <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                     <img src="https://i.pravatar.cc/100?u=alex" alt="avatar" />
                   </div>
                   <div>
                     <p className="font-bold text-sm">Alex</p>
                     <p className="text-[10px] text-green-500 font-semibold">Online Now</p>
                   </div>
                </div>
                <div className="space-y-3 flex-grow overflow-hidden">
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none mr-8">
                    <p className="text-xs">Hey Maya! Loved your art pieces. How long have you been painting? 🎨</p>
                  </div>
                  <div className="bg-brand-gradient text-white p-3 rounded-2xl rounded-tr-none ml-8">
                    <p className="text-xs">Hi Alex! Thank you so much. I've been at it for 5 years now! 👋</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none mr-8">
                    <p className="text-xs">That's amazing! We should definitely talk more about it over coffee sometime? ☕</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="flex-grow h-10 bg-gray-50 rounded-full border border-gray-100 flex items-center px-4 text-gray-300 text-xs">
                    Type a message...
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white">
                    <Heart size={16} fill="white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
