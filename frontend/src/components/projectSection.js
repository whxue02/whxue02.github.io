export default function ProjectSection() {
    const projects = [
        {
        title: "Predicting the Effect of Missense Mutations on Protein Growth",
        description: "Collaborated in a 5-member team to build and evaluate a soft-voting ensemble model combining Random Forest, Gradient Boosting, and SVM to classify missense mutations as low or high growth. Achieved 84.6% classification accuracy, outperforming baseline model by 23%. I developed the Transformer-GCN model prior to the pivot.",
        techStack: ["Python", "PyTorch", "ML", "Transformers"],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7325937747284656128/",
        award: "1st Place @ ACM Symposium!"
        },
        {
        title: "WanderLogic: Flight Optimizer",
        description: "Plan your dream trip in seconds with WanderLogic! WanderLogic generates optimized flight routes with s(CASP) logic programming based on user-inputted budget, dates, and destinations, using SerpAPI to scrape Google Flights and Hotels for data-driven travel suggestions.",
        techStack: ["s(CASP)", "React.js", "Python", "SerpAPI"],
        link: "https://devpost.com/software/team-ud086l",
        award: "3rd Place @ HackReason!"
        },
        {
        title: "Chronicle: Photo-Sharing Web App (Developed Solo!)",
        description: "Chronicle captures everyday moments and turns them into shared adventures. With collaboratice albums, comments, and a time-capsule feature that reveals memories in the future, this React + Flask app makes reliving stories with friends effortless.",
        techStack: ["React", "Flask", "MongoDB"],
        link: "https://devpost.com/software/chronicle-2ftej0",
        award: "UI/UX track winner @ WeHack!"
        },
        {
        title: "Multithreaded Database Server and Client in C",
        description: "Developed a multithreaded TCP client-server database system in C, supporting concurrent client connections, persistent record storage, and IPv4/IPv6 compatibility.",
        techStack: ["C", "Sockets", "Multithreading", "File Handling", "makefile"],
        link: "https://github.com/whxue02/Multithreaded-DB-Server-Client",
        award: "CS 3377"
            },
        {
        title: "ML from Scratch",
        description: "implemented neural networks, decision trees, and logistic/linear regression from scratch using Python and NumPy, with forward/backward propagation, gradient descent, and evaluation metrics.",
        techStack: ["Python", "NumPy", "ML"],
        link: "https://github.com/whxue02/ml-from-scratch?tab=readme-ov-file",
        award: "reinventing the wheel"
        },
        {
        title: "TalentTrade: A Skill-Exchanging Web App",
        description: "Designed a full-stack app with user profiles and authentication, in-app messaging, a machine learning recommendation algorithm, an AI-powered search bar, integrated Zoom meetings, and an onboarding skill questionnaire with a team of 4.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://github.com/acm-projects/TalentTrade",
        award: "first fullstack app :)"
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Floating decorations */}
            <div className="absolute top-20 left-12 w-12 h-12 bg-[#FFE66D] border-4 border-black rotate-45 animate-bounce invisible sm:visible"></div>
            <div className="absolute top-40 right-16 w-8 h-8 bg-[#1E3485] border-4 border-black animate-pulse invisible sm:visible"></div>
            <div className="absolute bottom-32 left-8 w-6 h-6 bg-[#92140C] border-4 border-black animate-spin [animation-duration:6s] invisible sm:visible"></div>
            <div className="absolute bottom-20 right-20 w-10 h-10 bg-black border-4 border-[#FFE66D] animate-bounce delay-700 invisible sm:visible"></div>

            {/* Title Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-wider text-black mb-5">
                    [PROJECTS]
                </h2>
                <div className="bg-black text-white p-3 font-mono text-lg shadow-[6px_6px_0_rgb(0,0,0)] transform -skew-x-2 inline-block">
                    <span className="text-white"></span> > Assembling quests...
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 m-4">
                    {projects.map((project, index) => (
                        <div 
                            key={project.title} 
                            className="group relative"
                        >
                            {/* Award Badge - Positioned outside/overlapping the card */}
                            <div 
                                className="absolute -top-1 -left-4 z-20 px-4 py-2 border-4 border-black font-mono text-sm font-bold transform rotate-[356deg] shadow-[6px_6px_0_rgb(0,0,0)] bg-[#FFE66D] text-black"
                            >
                                {project.award}
                            </div>

                            {/* Project Card */}
                            <div className="bg-white border-[5px] mt-5 border-black shadow-[12px_12px_0_rgb(0,0,0)] p-6 transform group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0_rgb(0,0,0)] transition-all duration-200 relative z-10">
                                
                                {/* Project Title */}
                                <h3 className="text-2xl font-bold font-mono text-black mb-4 group-hover:text-[#1E3485] transition-colors pt-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <div className=" text-black  font-mono text-sm leading-relaxed mb-4 transform skew-x-1">
                                    {project.description}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 font-mono text-xs font-semibold border-2 border-black transform hover:scale-110 transition-transform duration-150 `}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <a 
                                    target="_blank"
                                    href={project.link} 
                                    className="inline-block w-full text-center px-6 py-3 bg-blue text-white font-mono font-bold border-4 border-blue hover:bg-blue hover:text-white transition-all duration-150 shadow-[6px_6px_0_black] transform hover:-translate-y-1 hover:shadow-[8px_8px_0_black] active:translate-y-0 active:shadow-[3px_3px_0_black]"
                                >
                                    [VIEW_PROJECT] →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Terminal Stats */}
            <div className="mt-20 max-w-4xl mx-auto">
                <div className="bg-black border-4 border-red p-6">
                    <div className="flex justify-between items-center text-pink font-mono text-sm mb-4">
                        <span>[PROJECT_STATS]</span>
                        <span className="animate-pulse">ANALYZING █</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">6</div>
                            <div className="text-xs text-white">TOTAL_PROJECTS</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">12+</div>
                            <div className="text-xs text-white">TECHNOLOGIES</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">2</div>
                            <div className="text-xs text-white">HACKATHON_WINS</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">99%</div>
                            <div className="text-xs text-white">LUCK</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}