import '../styles/navBar.css';

export const NavBar = () => {
    const closeMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navContent = document.querySelector('.nav-content');
        const body = document.querySelector('body');

        if (hamburger) hamburger.classList.remove('active');
        if (navContent) navContent.classList.remove('active');
        if (body) body.classList.remove('no-scroll');
    };

    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li><a onClick={() => closeMenu()} href='#home'>Home</a></li>
                        <li><a onClick={() => closeMenu()} href='#projects'>Projects</a></li>
                        <li><a onClick={() => closeMenu()} href='#skills'>Skills</a></li>
                        <li><a onClick={() => closeMenu()} href='#about'>About me</a></li>
                    </ul>
                </nav>
            </div>
            <div className="social-links">
                <a href="https://www.instagram.com/iturri_santiago/">Instagram</a>
                <a href="https://github.com/Ichurri">GitHub</a>
                <a href="https://www.linkedin.com/in/santiago-iturri-969003320/">LinkedIn</a>
            </div>
        </>
    )
}
