import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_x8or571";
const TEMPLATE_ID = "template_q1xlg6k";
const PUBLIC_KEY = "mbDgXMa73d7zpZCaZ";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="contact">
            <h1 className="contact-title">Let's Work Together</h1>
            <div className="contact-container">

                <form className="contact-letter-layout" onSubmit={handleSubmit}>
                    <h3 className="contact-subtitle">Send me a message</h3>

                    <h3 className="contact-label">Name</h3>
                    <input
                        type="text"
                        name="name"
                        className="contact-input"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <h3 className="contact-label">Email</h3>
                    <input
                        type="email"
                        name="email"
                        className="contact-input"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <h3 className="contact-label">Message</h3>
                    <textarea
                        name="message"
                        className="contact-textarea"
                        placeholder="Your message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = e.target.scrollHeight + "px";
                        }}
                        required
                    />

                    <button className="contact-send" type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="contact-status contact-status--success">
                            Message sent! I'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="contact-status contact-status--error">
                            Something went wrong. Please try again or email me directly.
                        </p>
                    )}
                </form>

                <div className="contact-info-layout">

                    <div className="contact-info">
                        <p className="contact-social-info">I'm always open to new projects, collaborations, and ideas worth building — even the ones that don't exist yet. Whether you have something specific in mind or just want to explore possibilities, I'd love to connect.</p>
                        <ul className="contact-social-list">
                            <li>Web & Mobile Development</li>
                            <li>UI/UX Design</li>
                            <li>Technical Consulting</li>
                            <li>Open Source & Side Projects</li>
                        </ul>
                    </div>

                    <div className="contact-socials">

                        <p className="contact-social-label">My socials</p>

                        <div className="contact-social-links">

                            <a href="https://github.com/ElenTurokamo" className="contact-social-link" target="_blank" rel="noopener noreferrer">
                                <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>

                            <a href="mailto:elennightforewer@gmail.com?subject=SleepyFramework%20-%20Portfolio%20Contact" className="contact-social-link" target="_blank" rel="noopener noreferrer">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                                </svg>
                            </a>
                            
                            <a href="https://www.instagram.com/_lovelycoffee_/" className="contact-social-link" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact