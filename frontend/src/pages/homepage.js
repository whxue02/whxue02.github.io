import Navbar from "../components/navbar"
import HomeSection from "../components/homeSection"
import ExperiencesSection from "../components/expSection"
import ProjectSection from "../components/projectSection"
import SkillsSection from "../components/skillsSection"

const Homepage = () => {
    return(
        <div className="relative min-h-screen">
            {/* grid overlay */}
            <div 
                className="fixed inset-0 opacity-20 pointer-events-none z-0" 
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 18px,
                        rgba(0,0,0,0.3) 18px,
                        rgba(0,0,0,0.3) 20px
                    ), repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 18px,
                        rgba(0,0,0,0.3) 18px,
                        rgba(0,0,0,0.3) 20px
                    )`
                }}
            ></div>
            
            {/* position conent above grid */}
            <div className="relative z-10">
                <Navbar/>
                <HomeSection/>
                <ExperiencesSection/>
                <ProjectSection/>
                <SkillsSection/>
            </div>
        </div>
    )
}

export default Homepage