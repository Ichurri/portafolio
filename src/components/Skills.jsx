import '../styles/skills.css';

export const Skills = () => {
    return (
        <>
            <section id="skills">
                <div className="wrapper">
                    <header>
                        <h2>Skills</h2>
                    </header>
                    <div className="cards">
                        <div className="card">
                            <img src="/assets/logos/javascript.png" alt="JavaScript Logo" className="logo" />
                            <span>JavaScript</span>
                            <p>Most of my experience with JavaScript I acquired it autodidactically through the courses in Udemy, The project is based on a combination of the development of complex projects and intermediate level in fundamentals, DOM, object oriented programming and asynchrony.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/html.png" alt="HTML Logo" className="logo" />
                            <span>HTML</span>
                            <p>I gained my experience in HTML through personal and university projects, learning to structure semantic and accessible web pages, using appropriate tags to improve the organization and SEO of sites.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/css.png" alt="CSS Logo" className="logo" />
                            <span>CSS</span>
                            <p>My experience with CSS is focused on creating attractive and responsive designs, using advanced techniques like Flexbox and Grid Layout, and improving my skills in animations and transitions to improve the user experience.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/mern.png" alt="Mern Logo" className="logo mern-logo" />
                            <span>MERN</span>
                            <p>I learned React and the MERN stack through the courses at Udemy, building dynamic and scalable web applications with components, state and lifecycle, integrating Node.js, Express and MongoDB for full stack development.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/cpp.png" alt="C++ Logo" className="logo" />
                            <span>C++</span>
                            <p>I learned to program in C++ during my university studies, acquiring skills in programming algorithms and data structures. I have mastered concepts such as inheritance, polymorphism, object-oriented programming and the use of pointers. I consider myself to have an advanced level in this programming language.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/python.png" alt="Python Logo" className="logo" />
                            <span>Python</span>
                            <p>I learned to code in Python as a self-taught student for university projects. I know libraries like matplotlib, tkinter and numpy, among others, that are useful for engineering applications and data analysis.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
