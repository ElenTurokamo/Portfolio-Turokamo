function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">

                    <p className="hero-status">
                        Available for new Projects
                    </p>

                    <h1 className="hero-title">
                        Hey! , I'm <span className="hero-name">Elen</span><span className="hero-emoji">💤</span>
                    </h1>

                    <p className="hero-subtitle">
                        Full-Stack Developer
                    </p>

                    <p className="hero-about">
                        I'm a passionate full-stack developer with experience in building modern web applications.
                    </p>

                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#projects">
                            View My Work
                        </a>

                        <a className="btn btn-secondary" href="#contact">
                            Get in Touch
                        </a>
                    </div>          

                </div>
            </div>
        </section>
    )
}

export default Hero