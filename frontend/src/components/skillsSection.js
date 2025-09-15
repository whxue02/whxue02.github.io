export default function SkillsSection() {
    const skillCategories = [
        {
            category: "FRONTEND",
            skills: ["JavaScript", "React", "TailwindCSS"],
            color: "bg-[#FFE66D]",
            textColor: "text-black"
        },
        {
            category: "BACKEND",
            skills: ["Flask", "Node.js", "MongoDB"],
            color: "bg-[#1E3485]",
            textColor: "text-white"
        },
        {
            category: "SYSTEMS",
            skills: ["C / C++", "Linux", "Multithreading"],
            color: "bg-[#92140C]",
            textColor: "text-white"
        },
        {
            category: "OTHER",
            skills: ["Certified AWS Cloud Practitioner", "Git", "PyTorch"],
            color: "bg-black",
            textColor: "text-white"
        }
    ];

    const achievements = [
        { label: "COURSES_COMPLETE", value: "13", suffix: "" },
        { label: "HACKATHONS", value: "4", suffix: "" },
        { label: "REPOS", value: "14", suffix: "" },
        { label: "LINES_OF_CODE", value: "1+", suffix: "" }
    ];

    return (
        <section id="skills" className="min-h-screen py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden ">
            {/* squares */}
            <div className="absolute top-16 left-16 w-16 h-16 bg-[#1E3485] border-4 border-black animate-pulse invisible sm:visible"></div>
            <div className="absolute top-32 right-12 w-12 h-12 bg-[#FFE66D] border-4 border-black rotate-45 animate-bounce invisible sm:visible"></div>
            <div className="absolute bottom-40 left-8 w-8 h-8 bg-[#92140C] border-4 border-black animate-spin [animation-duration:4s] invisible sm:visible"></div>
            <div className="absolute bottom-24 right-16 w-10 h-10 bg-black border-4 border-[#FFE66D] animate-bounce delay-500 invisible sm:visible"></div>
            <div className="absolute top-1/2 left-4 w-6 h-6 bg-[#FFE66D] border-4 border-black animate-ping"></div>

            {/* title  */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-wider text-black mb-4">
                    [SKILLS]
                </h2>
                <div className="bg-black text-white p-3 font-mono text-lg shadow-[6px_6px_0_rgb(0,0,0)] transform -skew-x-2 inline-block">
                    <span className="text-white"></span> > Loading arsenal...
                </div>
            </div>

            {/* skills grid */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div 
                            key={category.category}
                            className="group relative"
                        >
                            {/*header */}
                            <div className={`${category.color} ${category.textColor} p-4 border-4 border-black shadow-[8px_8px_0_rgb(0,0,0)] font-mono font-bold text-xl mb-4 transform group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0_rgb(0,0,0)] transition-all duration-200`}>
                                [{category.category}]
                            </div>

                            {/* skills */}
                            <div className="bg-white border-4 border-black shadow-[8px_8px_0_rgb(0,0,0)] p-6 transform group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0_rgb(0,0,0)] transition-all duration-200">
                                <div className="grid gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skill}
                                            className="flex items-center justify-between p-3 bg-gray-100 border-2 border-black font-mono hover:bg-[#EBEBEB] hover:scale-105 transition-all duration-200 cursor-pointer"
                                            style={{
                                                animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                                            }}
                                        >
                                            <span className="font-bold text-black">
                                                {skill}
                                            </span>
                                            
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* stats */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-[#FFE66D] border-4 border-black p-6 shadow-[12px_12px_0_rgb(0,0,0)]">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold font-mono text-black">
                            [ACHIEVEMENTS_UNLOCKED]
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.label}
                                className="text-center group cursor-pointer"
                            >
                                <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0_rgb(0,0,0)] group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_rgb(0,0,0)] transition-all duration-200">
                                    <div className="text-3xl font-bold font-mono text-[#1E3485] mb-2">
                                        {achievement.value}
                                        <span className="text-[#92140C]">{achievement.suffix}</span>
                                    </div>
                                    <div className="text-xs font-mono text-black font-bold">
                                        {achievement.label}
                                    </div>
                                </div>
                                {/* icon */}
                                <div className="mt-2 flex justify-center">
                                    <div className="w-6 h-6 bg-[#FFE66D] border-2 border-black transform rotate-45 group-hover:animate-spin"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* terminal */}
            <div className="mt-16 max-w-3xl mx-auto">
                <div className="bg-black border-4 border-[#1E3485] p-4">
                    <div className="text-white font-mono text-sm">
                        <span className="text-white"></span> skills.exe --status
                        <br />
                        <span className="text-white">LOADING...</span> ████████████████████████ 100%
                        <br />
                        <span className="text-white"></span> All systems operational. Ready for next challenge!
                        <span className="animate-pulse text-white"> █</span>
                    </div>
                </div>
            </div>
        </section>
    );
}