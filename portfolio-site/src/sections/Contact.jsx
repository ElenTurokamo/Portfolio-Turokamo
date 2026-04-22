function Contact() {
    return (
        <section id="contact">
            <h1>Let's work together</h1>
            <div>
                <div>
                    <h3>Send me a message</h3>
                    <h3>Name</h3>
                    <input type="text" placeholder="Your name" />
                    <h3>Email</h3>
                    <input type="email" placeholder="Your email" />
                    <h3>Message</h3>
                    <textarea placeholder="Your message"></textarea>
                    <button>Send Message</button>   
                </div>    

                <div>
                    <p>I'm always open to discussing new opportunities!</p>
                </div>       

                <div>
                    <p>My socials</p>
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
