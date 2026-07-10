import icon from "../assets/icon.gif";


function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-layout">
                    <div className="about-text">
                        <h1 className="about-title">About me</h1>
                        <p className="about-first">
                            I'm <span className="hero-name">Elen</span> — an independent developer who treats every project as a step into unfamiliar territory. My path isn't linear, but each challenge deliberately expands what I'm capable of.
                        </p>
                        <p className="about-second">
                            I'm working toward becoming a specialist with no geographical or industry limits — someone who anticipates problems before they exist and builds solutions that stand the test of time.
                        </p>
                        <p className="about-third">
                            Progress, to me, is earned through persistence. Setbacks sharpen my focus rather than break it. I'm not chasing quick wins — I'm building something that lasts.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={icon} alt="About me" className="about-img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About