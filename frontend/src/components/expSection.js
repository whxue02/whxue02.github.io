export default function ExperiencesSection() {
    const experiences = [
      {
        company: "ACM Research",
        position: "Research Lead",
        duration: "May 2025 - Present",
        description: "Building an IDS (intrusion detection system) for detecting common web cyber attacks early, using raw network packets and early classification.",
        technologies: ["PyTorch", "Scapy", "LSTMs"]
      },
      {
        company: "Thorben Consulting",
        position: "Cloud Engineering Intern",
        duration: "June 2025 - August 2025",
        description: "Designed and implemented the data processing architecture for a Retrieval-Augmented Generation (RAG) workflow on government PowerPoint files, adopted by 10 interns as the standard framework. Developed an automated image-processing Lambda function integrating Amazon Rekognition and Amazon Nova Lite, eliminating manual intervention in the pipeline.",
        technologies: ["Python", "AWS Lambda", "AWS S3", "AWS Rekognition", "AWS Bedrock", "RAG"]
      },
      {
        company: "The University of Texas at Dallas",
        position: "Undergraduate Researcher",
        duration: "May 2024 - August 2024",
        description: "Developed a machine learning model using diffusion and transformers that takes spoken audio to generate a synchronized 3D talking face. Achieved a jaw pose error rate of 0.00190, demonstrating the model’s accurate speech movements predictions.",
        technologies: ["Python", "PyTorch", "Diffusion", "Transformers"]
      }
    ];
  
    return (
      <section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 lg:px-20 py-16 relative overflow-hidden"
      >
        {/* floating squares */}
        <div className="absolute top-16 left-8 w-6 h-6 bg-[#FFE66D] border-4 border-black animate-pulse invisible sm:visible"></div>
        <div className="absolute top-32 right-12 w-8 h-8 bg-[#1E3485] border-4 border-black animate-bounce invisible sm:visible"></div>
        <div className="absolute bottom-24 left-16 w-10 h-10 bg-[#92140C] border-4 border-black animate-spin [animation-duration:8s] invisible sm:visible"></div>
        <div className="absolute bottom-40 right-8 w-6 h-6 bg-[#FFE66D] border-4 border-black animate-bounce delay-500 invisible sm:visible"></div>
  
        {/* title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-wider text-black  mt-4 mb-5">
            [EXPERIENCES]
          </h2>
          <div className="bg-black text-white p-3 font-mono text-lg shadow-[6px_6px_0_rgb(0,0,0)] transform -skew-x-2 inline-block">
            <span className="text-white"></span> > Compiling professional XP...
          </div>
        </div>
  
        {/* experiences */}
        <div className="max-w-6xl w-full space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-4 gap-6 items-start group"
            >
              {/* timeline side thing */}
              <div className="flex items-center md:justify-end">
                <div className="bg-red text-beige p-4 border border-[3px] border-black font-mono font-bold shadow-[6px_6px_0_black] transform -rotate-2 group-hover:rotate-0 transition-transform duration-200">
                  {exp.duration}
                </div>
              </div>
  
              {/* main content */}
              <div className="md:col-span-3">
                <div className="bg-white text-white p-6 border-[5px] border-black shadow-[12px_12px_0_rgb(30,52,133)] transform group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0_rgb(30,52,133)] transition-all duration-200">
                  {/* company and position */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold font-mono text-blue mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-mono text-black font-semibold">
                       {exp.position}
                    </p>
                  </div>
  
                  {/* description */}
                  <div className="mb-4">
                    <p className="font-mono text-black leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
  
                  {/* technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-yellow text-black font-mono text-sm border-2 border-black font-semibold transform hover:scale-105 transition-transform duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* bottom stats */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black border-4 border-[#FFE66D] p-4 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-white font-mono text-xs mb-1">YEARS</div>
              <div className="text-white font-mono text-2xl font-bold">1+</div>
            </div>
            <div className="bg-black border-4 border-[#1E3485] p-4 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-white font-mono text-xs mb-1">PROJECTS COMPLETED</div>
              <div className="text-white font-mono text-2xl font-bold">3</div>
            </div>
            <div className="bg-black border-4 border-[#92140C] p-4 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-white font-mono text-xs mb-1">TECHNOLOGIES USED</div>
              <div className="text-white font-mono text-2xl font-bold">10+</div>
            </div>
            <div className="bg-black border-4 border-[#FFE66D] p-4 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-white font-mono text-xs mb-1">MODELS TRAINED</div>
              <div className="text-white font-mono text-2xl font-bold">3+</div>
            </div>
          </div>
        </div>
      </section>
    );
  }