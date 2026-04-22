import { useEffect, useState } from "react"

function Header() {
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setShowHeader(true);
            } else if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else if (lastScrollY - currentScrollY > 10) {
                setShowHeader(true);
            }

            lastScrollY = currentScrollY;
            console.log(showHeader, currentScrollY, lastScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <header className={showHeader ? 'header show' : 'header hide'}>
        <div className="container">
            <nav className="navbar">
                <a href="#home" className="logo">
                    Elen
                </a>

                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* <li><a href="#blog">Blog</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header