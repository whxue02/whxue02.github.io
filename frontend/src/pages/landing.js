import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const [showCharacter, setShowCharacter] = useState(false);
    const [characterState, setCharacterState] = useState('idle');
    const [showPressStart, setShowPressStart] = useState(false);
    const [gridBlocks, setGridBlocks] = useState([]);
    const [nameAnimated, setNameAnimated] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    // grid
    useEffect(() => {
        const blocks = [];
        for (let i = 0; i < 120; i++) {
            blocks.push({
                id: i,
                active: Math.random() > 0.8,
                color: ['bg-[#FFE66D]', 'bg-[#1E3485]', 'bg-[#92140C]'][Math.floor(Math.random() * 3)]
            });
        }
        setGridBlocks(blocks);

        // animation 
        setTimeout(() => setNameAnimated(true), 500);
        setTimeout(() => setShowCharacter(true), 1500);
        setTimeout(() => setShowPressStart(true), 2500);
    }, []);

    // grid animation
    useEffect(() => {
        const interval = setInterval(() => {
            setGridBlocks(prev => prev.map(block => ({
                ...block,
                active: Math.random() > 0.85,
                color: ['bg-[#FFE66D]', 'bg-[#1E3485]', 'bg-[#92140C]'][Math.floor(Math.random() * 3)]
            })));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // character idle animation
    useEffect(() => {
        if (!showCharacter) return;
        
        const interval = setInterval(() => {
            setCharacterState(prev => prev === 'idle' ? 'blink' : 'idle');
        }, 3000);

        return () => clearInterval(interval);
    }, [showCharacter]);

    const handleStartClick = () => {
        setIsTransitioning(true);
        
        // transition delay before navigation
        setTimeout(() => {
            navigate("/home");
        }, 1000); 
    };

    return (
        <div className={`relative min-h-screen bg-white overflow-hidden transition-all duration-1000 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
            {/* animated background */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 gap-1 h-full p-4">
                    {gridBlocks.map((block) => (
                        <div
                            key={block.id}
                            className={`
                                border-2 border-black transition-all duration-500
                                ${block.active ? `${block.color} opacity-60` : 'bg-gray-200 opacity-20'}
                            `}
                            style={{
                                transform: block.active ? 'scale(1)' : 'scale(0.8)',
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* transition page thing */}
            {isTransitioning && (
                <div className="absolute inset-0 bg-black z-50 flex items-center justify-center animate-fade-in">
                    <div className="text-center">
                        <div className="text-[#FFE66D] font-mono text-2xl md:text-4xl mb-4">
                            LOADING PORTFOLIO.EXE
                        </div>
                        <div className="w-64 h-4 border-2 border-[#FFE66D] mx-auto">
                            <div className="h-full bg-[#FFE66D] animate-pulse" style={{ width: '100%' }}></div>
                        </div>
                        <div className="text-[#FFE66D] font-mono text-sm mt-4 animate-pulse">
                            PLEASE WAIT...
                        </div>
                    </div>
                </div>
            )}

            {/* floating squares*/}
            <div className="absolute top-20 left-20 w-12 h-12 bg-[#FFE66D] border-4 border-black rotate-45 animate-bounce [animation-duration:3s] invisible sm:visible"></div>
            <div className="absolute top-40 right-16 w-8 h-8 bg-[#1E3485] border-4 border-black animate-pulse [animation-duration:2s] invisible sm:visible"></div>
            <div className="absolute bottom-32 left-12 w-10 h-10 bg-[#92140C] border-4 border-black animate-spin [animation-duration:8s] invisible sm:visible"></div>
            <div className="absolute bottom-20 right-24 w-6 h-6 bg-black border-4 border-[#FFE66D] animate-bounce delay-100 invisible sm:visible"></div>

            {/* main stuff */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                
                {/* title */}
                <div className={`text-center mb-12 transition-all duration-1000 ${
                    nameAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${isTransitioning ? '-translate-y-8 opacity-0' : ''}`}>
                    <div className="relative">
                        {/* glitch shadow layers */}
                        <h1 className="absolute text-6xl md:text-6xl lg:text-7xl font-black font-mono tracking-wider text-[#92140C] opacity-20 transform translate-x-2 translate-y-2">
                            CHERYL WANG
                        </h1>
                        <h1 className="absolute text-6xl md:text-6xl lg:text-7xl font-black font-mono tracking-wider text-[#1E3485] opacity-30 transform -translate-x-1 -translate-y-1">
                            CHERYL WANG
                        </h1>
                        <h1 className="relative text-6xl md:text-6xl lg:text-7xl font-black font-mono tracking-wider text-black">
                            CHERYL WANG
                        </h1>
                    </div>
                </div>

                {/* cute cat */}
                <div className={`transition-all duration-800 ${
                    showCharacter ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                } ${isTransitioning ? 'translate-y-12 opacity-0 scale-95' : ''}`}>
                    <div className="bg-white border-8 border-black p-8 shadow-[16px_16px_0_rgb(0,0,0)] transform hover:scale-105 transition-transform duration-300">
                        <pre className="font-mono text-2xl md:text-3xl lg:text-4xl leading-tight text-center">
{characterState === 'idle' ? (
`╔═══════════════╗
║     /\\_/\\     ║
║    ( o.o )    ║
║      >=<      ║
╚═══════════════╝`
) : (
`╔═══════════════╗
║     /\\_/\\     ║
║    ( -.- )    ║
║      >=<      ║
╚═══════════════╝`
)}
                        </pre>
                        
                        {/* bouncing squares */}
                        <div className="flex justify-center mt-4 space-x-2">
                            <div className="w-4 h-4 bg-[#FFE66D] border-2 border-black animate-bounce"></div>
                            <div className="w-4 h-4 bg-[#1E3485] border-2 border-black animate-bounce delay-150"></div>
                            <div className="w-4 h-4 bg-[#92140C] border-2 border-black animate-bounce delay-300"></div>
                        </div>
                    </div>
                </div>

                {/* press start */}
                <div className={`mt-12 transition-all duration-600 ${
                    showPressStart ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${isTransitioning ? 'translate-y-4 opacity-0' : ''}`}>
                    <button 
                        className="group px-8 py-4 bg-[#1E3485] text-white border-4 border-black font-mono font-bold text-xl md:text-2xl shadow-[8px_8px_0_rgb(0,0,0)] transform hover:-translate-y-2 hover:shadow-[12px_12px_0_rgb(0,0,0)] active:translate-y-0 active:shadow-[4px_4px_0_rgb(0,0,0)] transition-all duration-150 animate-pulse hover:animate-none hover:bg-[#FFE66D] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleStartClick}
                        disabled={isTransitioning}
                    >
                        <div className="flex items-center space-x-3">
                            <span>▶</span>
                            <span>{isTransitioning ? 'LOADING...' : 'PRESS START TO CONTINUE'}</span>
                            <span>◀</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* micelanious corner stuff */}
            <div className="absolute top-4 left-4">
                <div className="bg-[#FFE66D] border-4 border-black p-2 font-mono text-sm font-bold invisible sm:visible">
                    v1.0.0
                </div>
            </div>
            
            <div className="absolute top-4 right-4">
                <div className="bg-black text-[#00FF00] border-4 border-[#00FF00] p-2 font-mono text-sm invisible sm:visible">
                    <span className="animate-pulse">ONLINE</span>
                </div>
            </div>

            <div className="absolute bottom-4 left-4">
                <div className="bg-[#92140C] text-white border-4 border-black p-2 font-mono text-xs">
                    EST. 2025
                </div>
            </div>

            <div className="absolute bottom-4 right-4">
                <div className="bg-white border-4 border-black p-2 font-mono text-xs font-bold">
                    INSERT COIN
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Landing;