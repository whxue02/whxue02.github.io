import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function HomeSection() {
    const [hovered, setHovered] = useState(false);
    return (
      <section
        id="Home"
        className="min-h-screen flex items-center justify-center  px-4 md:px-12 lg:px-20 py-8 relative overflow-hidden"
      >
        
        
        {/* lfoating squares*/}
        <div className="absolute top-10 left-10 w-8 h-8 bg-lightblue border-4 border-black animate-bounce invisible sm:visible"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-red border-4 border-black animate-pulse invisible sm:visible"></div>
        <div className="absolute bottom-20 left-20 w-10 h-10 bg-blue border-4 border-black animate-spin [animation-duration:5s] invisible sm:visible"></div>
        <div className="absolute bottom-10 right-10 w-8 h-8 bg-yellow border-4 border-black animate-bounce delay-1000"></div>

        {/* container with two columns */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center relative z-10">
          {/* text */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 order-2 md:order-1 text-center md:text-left">
            {/* title */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono tracking-wider text-black leading-tight relative z-20">
                Hi, I'm Cheryl Wang
              </h1>
            </div>
            
            <div className="bg-black text-beige p-4 border-4 border-red font-mono text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed shadow-[8px_8px_0_rgb(150,20,13)] transform -skew-x-2">
              <span className="text-beige"></span> I'm a 2x hackathon winner interested in full-stack dev, AI/ML, and cloud!
              <span className="animate-pulse [animation-duration: 0.5s] text-beige">█</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-4 border-[3px] border-black bg-blue text-white font-bold font-mono hover:bg-blue hover:text-beige transition-all duration-150 shadow-[8px_8px_0_rgb(0,0,0)] text-center text-sm md:text-base transform hover:-translate-y-2 hover:shadow-[12px_12px_0_rgb(0,0,0)] active:translate-y-0 active:shadow-[4px_4px_0_rgb(0,0,0)]"
              >
                [VIEW_PROJECTS]
              </a>
              <a
              href="https://github.com/whxue02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-black bg-yellow hover:bg-black hover:text-white transition-all duration-200 shadow-[8px_8px_0_rgb(0,0,0)] transform hover:-translate-y-2 hover:shadow-[12px_12px_0_rgb(0,0,0)] active:translate-y-0 active:shadow-[4px_4px_0_rgb(0,0,0)]"
              
            >
              <FaGithub size={28} className="m-auto" />
            </a>
            <a
              href="https://linkedin.com/in/cherylwang02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-black bg-yellow hover:bg-[#0A66C2] hover:text-white transition-all duration-200 shadow-[8px_8px_0_rgb(0,0,0)] transform hover:-translate-y-2 hover:shadow-[12px_12px_0_rgb(0,0,0)] active:translate-y-0 active:shadow-[4px_4px_0_rgb(0,0,0)]"
            >
              <FaLinkedin size={28} className="m-auto" />
            </a>
            </div>
          </div>
  
          {/* avatar */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 mt-6 md:mt-0 mt-[50px]">
            <div className="relative">
              {/* border effect */}
            
              <div className="absolute -inset-3 bg-black"></div>
              
              <img
                src={hovered ? "./images/shocked.png" : "./images/pfp.png"}
                alt="Cheryl Wang"
                className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover border-8 border-black shadow-[12px_12px_0_rgb(0,0,0)] transform hover:scale-105 transition-transform duration-150 filter"
                style={{
                    imageRendering: "pixelated",
                    clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%)",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                />
              
              {/* scan lines effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent opacity-20 pointer-events-none" 
                   style={{
                     backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)'
                   }}>
              </div>
            </div>
          </div>
        </div>

        
      </section>
    );
  }