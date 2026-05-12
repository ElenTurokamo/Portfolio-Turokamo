import Card1 from '../assets/Card-1.png'

function Projects() {
    const projects = [
    {
        id: 1,
        title: 'Personal Portfolio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
        stack: ['html', 'css', 'react'],
        liveUrl: 'https://...',
        githubUrl: 'https://github.com/ElenTurokamo/Portfolio-Turokamo',
        image: Card1,
    },
    ]
    
    return (
        <section id="projects" className="projects">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-about">
                A collection of projects I've worked on...
            </p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img className="project-img" src={project.image} alt={project.title} />

                        <div className='project-card-data'>
                        <h3 className='project-card-title'>{project.title}</h3>
                        <p className="project-card-description">{project.description}</p>

                        <div className="project-card-stack">
                            {project.stack.map((tech, index) => (
                            <span key={index}>{tech}</span>
                            ))}
                        </div>

                        <div className="project-card-actions">
                            <a className="btn-big" href={project.liveUrl} target="_blank" rel="noreferrer">
                            View Details
                            </a>
                            <a className="btn-small" href={project.liveUrl} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                </svg>
                            </a>

                            <a className="btn-small" href={project.githubUrl} target="_blank" rel="noreferrer">
                                <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                    ))}
            </div>      
        </section>
    )
}

export default Projects
