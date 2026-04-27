import { useEffect, useRef, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const stats = [
        { label: 'Years Experience', value: '3+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Technologies', value: '15+' },
        { label: 'Happy Clients', value: '30+' }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Section header */}
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Passionate developer dedicated to creating exceptional digital experiences
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Main content */}
                <div className="max-w-5xl mx-auto">
                    {/* Story Section */}
                    <div className={`mb-10 sm:mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300">
                            <div className="space-y-5">
                                {/* Title with border */}
                                <div className="relative pl-5 border-l-4 border-blue-500">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">My Story</h3>
                                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                        I'm a passionate MERN Stack Developer with expertise in building modern, scalable web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by robust server-side solutions.
                                    </p>
                                </div>

                                {/* Body paragraphs */}
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                    My journey in web development has equipped me with the skills to handle everything from database design to responsive UI implementation. I thrive on solving complex problems and turning ideas into reality through clean, maintainable code.
                                </p>

                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                    Beyond coding, I'm committed to continuous learning and staying updated with the latest industry trends. I actively contribute to open-source projects, write technical articles, and mentor aspiring developers in the community.
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 pt-4">
                                    {['Full Stack Developer', 'Problem Solver', 'Team Player', 'Quick Learner'].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-zinc-800/50 backdrop-blur-sm text-blue-400 rounded-lg text-sm font-medium border border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-800 transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-7 border border-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 card-elevated group text-center"
                                >
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform leading-none">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-400 font-medium leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
