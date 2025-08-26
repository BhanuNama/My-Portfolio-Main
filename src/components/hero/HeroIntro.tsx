
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroIntro = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 3D tilt effect for the title
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 10;
        const y = (clientY / window.innerHeight - 0.5) * 10;
        
        titleRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Type animation for the subtitle
    const text = "I build things for the web.";
    const subtitle = document.getElementById('subtitle');
    let charIndex = 0;
    
    if (subtitle) {
      subtitle.textContent = '';
      const typeAnimation = setInterval(() => {
        if (charIndex < text.length) {
          subtitle.textContent += text.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeAnimation);
        }
      }, 100);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.p 
        className="font-mono text-teal mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1 
        ref={titleRef}
        className="text-5xl md:text-7xl font-bold text-lightest-slate mb-4 transition-transform duration-200 bg-gradient-to-r from-teal via-lightest-slate to-white bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        Bhanu Nama.
      </motion.h1>
      
      <motion.h2 
        id="subtitle" 
        className="text-4xl md:text-6xl font-bold text-slate mb-6 min-h-[4rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        
      </motion.h2>
      
      <motion.p 
        className="max-w-xl text-slate mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I'm an aspiring Software Developer specializing in building exceptional digital experiences.
        Currently, I'm focused on MERN stack, Java, and Python with a solid foundation in database management
        and scalable application development.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative"
      >
        <motion.a 
          href="#projects" 
          className="btn group relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Check out my work!</span>
          <span className="absolute inset-0 bg-teal/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </motion.a>
        
        {/* Floating decorative elements */}
        <div className="absolute -top-4 -left-4 w-3 h-3 bg-teal/40 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-teal/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-teal/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </motion.div>
    </>
  );
};

export default HeroIntro;
