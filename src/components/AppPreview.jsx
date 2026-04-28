import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageSquare, Flame, Star, X } from 'lucide-react';

const Card = ({ profile, onSwipe, index, total }) => {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.x > 100) onSwipe('right');
        else if (info.offset.x < -100) onSwipe('left');
      }}
      initial={{ scale: 0.9, opacity: 0, y: index * 10 }}
      animate={{ 
        scale: 1 - index * 0.05, 
        opacity: 1,
        y: index * 10,
        zIndex: total - index
      }}
      exit={{ 
        x: info => info > 0 ? 500 : -500, 
        opacity: 0, 
        rotate: info => info > 0 ? 45 : -45,
        transition: { duration: 0.3 }
      }}
      className="absolute w-64 sm:w-72 h-[400px] sm:h-[480px] bg-white rounded-[2rem] shadow-2xl p-4 border border-gray-100 flex flex-col cursor-grab active:cursor-grabbing"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <div className="relative flex-grow rounded-2xl overflow-hidden mb-4 pointer-events-none">
        <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <p className="text-white font-bold text-2xl mb-1">{profile.name}, {profile.age}</p>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <span className="bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-sm">{profile.bio}</span>
            <span>•</span>
            <span>{profile.distance}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center pb-2">
        <div className="w-12 h-12 rounded-full border-2 border-red-50 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors">
          <X size={24} />
        </div>
        <div className="w-14 h-14 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <Heart size={28} fill="white" />
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-blue-50 flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors">
          <Star size={24} />
        </div>
      </div>
    </motion.div>
  );
};

const AppPreview = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Maya", age: 22, bio: "Architect", distance: "2km away", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Priya", age: 24, bio: "Artist", distance: "5km away", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Anjali", age: 23, bio: "Designer", distance: "3km away", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Isha", age: 25, bio: "Developer", distance: "1km away", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" }
  ]);

  const handleSwipe = (direction) => {
    setProfiles(prev => prev.slice(1));
    // If we're low on cards, we could reset or fetch more
    if (profiles.length <= 1) {
      // For demo, just reset the stack
      setTimeout(() => {
        setProfiles([
          { id: 5, name: "Riya", age: 21, bio: "Student", distance: "4km away", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
          { id: 6, name: "Sana", age: 24, bio: "Writer", distance: "6km away", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
          ...profiles
        ]);
      }, 1000);
    }
  };

  return (
    <section className="py-24 bg-pastel-pink/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Swiping made <span className="gradient-text">Addictive</span></h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Experience the world's most intuitive dating interface. Drag right to like, left to pass. It's that simple and fun.
            </p>

            <div className="space-y-6">
              {[
                { icon: Flame, title: "Smooth Animations", desc: "Native-feel physics and delightful transitions." },
                { icon: Star, title: "Super Likes", desc: "Let them know you're really interested." },
                { icon: Heart, title: "Instant Match", desc: "Get notified the moment you both swipe right." }
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

          <div className="relative h-[550px] sm:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-gradient/5 rounded-full blur-3xl scale-150" />
            
            <div className="relative w-full flex justify-center h-full items-center">
              <AnimatePresence>
                {profiles.map((profile, i) => (
                  <Card 
                    key={profile.id} 
                    profile={profile} 
                    index={i} 
                    total={profiles.length}
                    onSwipe={handleSwipe}
                  />
                ))}
              </AnimatePresence>
              
              {profiles.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-400"
                >
                  <p className="text-xl font-bold mb-2">No more people around...</p>
                  <p>Try changing your filters!</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
