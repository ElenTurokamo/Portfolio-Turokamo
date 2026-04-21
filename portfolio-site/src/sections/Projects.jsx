function Projects() {
    const projects = [
        { id: 1, title: 'Weather Bot' },
        { id: 2, title: 'Personal Portfolio' },
        { id: 3, title: 'Task Manager App' },
    ]
    return (
        <section>
            <h2>My Projects</h2>
            <p>
                A collection of projects I've worked on...
            </p>

            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        <img src="https://via.placeholder.com/250x120" alt="" />
                        <h3>{project.title}</h3>

                        <p>Lorem impsum dolor sit amet...</p>

                        <div>
                            <span>html</span>
                            <span>html</span>
                            <span>html</span>
                            <span>html</span>
                        </div>

                        <div>
                            <button>View Details</button>
                            <button>🔗</button>
                            <button>Git</button>
                        </div>
                    </div>
                ))}
            </div>      
        </section>
    )
}

export default Projects
