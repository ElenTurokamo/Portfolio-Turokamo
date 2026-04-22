function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">

                    <p className="hero-status">
                        Available for new Projects
                    </p>

                    <h1 className="hero-title">
                        Hey! , I'm <span className="hero-name">Elen</span>
                    </h1>

                    <p className="hero-brand">
                        SleepyFramework💤
                    </p>

                    <p className="hero-subtitle">
                        Full-stack Developer
                    </p>
                    
                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            <a href="#projects">View My Work</a>
                        </button>

                        <button className="btn btn-secondary">
                            <a href="#contact">Get in Touch</a>
                        </button>
                    </div>          

                </div>
            </div>
        </section>
    )
}

export default Hero