import { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
            github: '#',
            demo: '#',
            featured: true
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, team collaboration features, and project tracking.',
            technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Redux'],
            github: '#',
            demo: '#',
            featured: true
        },
        {
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media metrics with data visualization, reporting, and multi-platform integration.',
            technologies: ['Next.js', 'Express', 'PostgreSQL', 'Chart.js', 'Tailwind'],
            github: '#',
            demo: '#',
            featured: false
        },
        {
            title: 'Blog Platform',
            description: 'Modern blogging platform with markdown support, comments, categories, and SEO optimization.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
            github: '#',
            demo: '#',
            featured: false
        }
    ];

    return (
        <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
                        A showcase of my recent work and personal projects
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 hover:border-blue-500/50 transition-all duration-500 card-elevated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100 + 200}ms` }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                {project.featured && (
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded border border-blue-500/20">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-zinc-800/50 text-gray-400 text-xs rounded border border-zinc-700/50 hover:border-blue-500/50 hover:text-gray-300 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 pt-4 border-t border-zinc-700/50">
                                <a
                                    href={project.github}
                                    className="group/link flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium"
                                    aria-label={`View ${project.title} code on GitHub`}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    <span className="group-hover/link:translate-x-0.5 transition-transform">View Code</span>
                                </a>
                                <a
                                    href={project.demo}
                                    className="group/link flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium"
                                    aria-label={`View ${project.title} live demo`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    <span className="group-hover/link:translate-x-0.5 transition-transform">Live Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View more */}
                <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 text-white rounded-lg hover:border-blue-500/50 hover:bg-zinc-800 transition-all duration-300 font-medium group"
                        aria-label="View all projects"
                    >
                        View All Projects
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
