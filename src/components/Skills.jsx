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
                            <img src="/assets/logos/cpp.png" alt="C++ Logo" className="logo" />
                            <span>C++</span>
                            <p>Advanced knowledge of C++ for algorithms and data structures, object-oriented programming, and low-level system operations.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/python.png" alt="Python Logo" className="logo" />
                            <span>Python</span>
                            <p>Experienced with Python for data analysis, web development, and engineering applications.</p>
                        </div>

                        <div className="card">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/assets/logos/html.png" alt="HTML Logo" className="logo" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="/assets/logos/css.png" alt="CSS Logo" className="logo" />
                                    </div>
                                </div>
                            </div>
                            <span>HTML/CSS</span>
                            <p>Proficient in building responsive and accessible web layouts using semantic HTML and modern CSS techniques.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/react.png" alt="React Logo" className="logo" />
                            <span>React JavaScript</span>
                            <p>Building dynamic single-page applications using React, managing state and component lifecycle efficiently.</p>
                        </div>

                        <div className="card">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/assets/logos/javascript.png" alt="JavaScript Logo" className="logo" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="/assets/logos/typescript.png" alt="TypeScript Logo" className="logo" />
                                    </div>
                                </div>
                            </div>
                            <span>JavaScript & TypeScript</span>
                            <p>Experienced with JavaScript and TypeScript, using OOP and asynchronous programming patterns.</p>
                        </div>

                        <div className="card">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/assets/logos/nodejs.png" alt="Node.js Logo" className="logo" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="/assets/logos/expressjs.png" alt="Express.js Logo" className="logo" />
                                    </div>
                                </div>
                            </div>
                            <span>Node.js & Express.js</span>
                            <p>Developing back-end services with Node.js and Express.js, focusing on API development.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/sql.png" alt="SQL Logo" className="logo" />
                            <span>SQL</span>
                            <p>Skilled in designing and querying relational databases using SQL for data management and analysis.</p>
                        </div>

                        <div className="card">
                            <img src="/assets/logos/mongodb.png" alt="MongoDB Logo" className="logo" />
                            <span>MongoDB</span>
                            <p>Proficient in using MongoDB as a NoSQL database for scalable, high-performance applications.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
