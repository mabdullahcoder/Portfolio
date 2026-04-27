import { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
                    }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-background opacity-40" />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

            <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 z-10">
                <div className="text-center">
                    {/* Greeting Badge */}
                    <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                            </span>
                            <span className="text-blue-400 font-medium text-sm tracking-wide">
                                Available for opportunities
                            </span>
                        </div>
                    </div>

                    {/* Main heading */}
                    <h1
                        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <span className="text-white">Hi, I'm </span>
                        <span className="gradient-text">Muhammad Abdullah</span>
                    </h1>

                    {/* Role */}
                    <div className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold mb-8">
                            MERN Stack Developer
                        </p>
                    </div>

                    {/* Description */}
                    <div className={`max-w-3xl mx-auto mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
                            Crafting scalable, high-performance web applications with modern technologies.
                            Specializing in full-stack development with MongoDB, Express.js, React, and Node.js.
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Turning complex problems into elegant, user-friendly solutions.
                        </p>
                    </div>

                    {/* Tech stack badges */}
                    <div className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'].map((tech, index) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 text-gray-300 rounded-lg text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 backdrop-blur-sm"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-3.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold text-base w-full sm:w-auto text-center flex items-center justify-center gap-2 overflow-hidden glow-effect hover:glow-effect-strong"
                            aria-label="View my projects"
                        >
                            <span className="relative z-10">View Projects</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="group px-8 py-3.5 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white rounded-lg hover:border-blue-500 hover:bg-zinc-800 transition-all duration-300 font-semibold text-base w-full sm:w-auto text-center flex items-center justify-center gap-2"
                            aria-label="Get in touch with me"
                        >
                            <span>Get in Touch</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <a
                            href="#about"
                            className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors group"
                            aria-label="Scroll down to about section"
                        >
                            <span className="text-xs uppercase tracking-wider font-medium">Explore More</span>
                            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2 group-hover:border-blue-400 transition-colors">
                                <div className="w-1.5 h-2.5 bg-gray-600 rounded-full animate-bounce group-hover:bg-blue-400" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
