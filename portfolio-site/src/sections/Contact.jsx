function Contact() {
    return (
        <section id="contact" className="contact">
            <h1 className="contact-title">Let's Work Together</h1>
            <div className="contact-container">
                
                <div className="contact-letter-layout">
                    <h3 className="contact-subtitle">Send me a message</h3>

                    <h3 className="contact-label">Name</h3>
                        <input type="text" className="contact-input" placeholder="Your name" />

                    <h3 className="contact-label">Email</h3>
                        <input type="email" className="contact-input" placeholder="Your email" />

                    <h3 className="contact-label">Message</h3>
                        <textarea
                        className="contact-textarea"
                        placeholder="Your message"
                        rows={3}
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = e.target.scrollHeight + 'px';
                        }}
                        />

                    <button className="contact-send">Send Message</button>   
                </div>    

                <div>
                    <div className="contact-info">
                        <p>I'm always open to discussing new opportunities!</p>
                    </div>       

                    <div className="contact-socials">
                        <p>My socials</p>

                        <a href="#" className="contact-social-link">GitHub</a>

                        <a href="#" className="contact-social-link">LinkedIn</a>
                        
                        <a href="#" className="contact-social-link">Instagram</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
