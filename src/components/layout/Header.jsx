import { useEffect, useState } from "react"

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setShowHeader(true);
            } else if (currentScrollY > lastScrollY) {
                setShowHeader(false);
                setMenuOpen(false);
            } else if (lastScrollY - currentScrollY > 10) {
                setShowHeader(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <>
            <header className={showHeader ? 'header show' : 'header hide'}>
                <div className="container">
                    <nav className="navbar">
                        <a href="#" className="logo">
                            elen<span className="header-dot"></span>
                        </a>
                        

                        <ul className="nav-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>

                        <button
                            className={`burger ${menuOpen ? 'burger--open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </nav>
                </div>
            </header>

            <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
                <ul className="mobile-nav-list">
                    <li><a href="#" onClick={handleNavClick}>Home</a></li>
                    <li><a href="#about" onClick={handleNavClick}>About</a></li>
                    <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header