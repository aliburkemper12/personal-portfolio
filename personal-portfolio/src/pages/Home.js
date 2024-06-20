export default function Home() {
    return (
        <div className="container-fluid">
                <div className='row'>
                    <div className='home-container'>
                        <div className='header'>
                            ALI BURKEMPER
                        </div>
                        <div className='header-sub'>
                            STUDENT | PROGRAMMER | DESIGNER
                        </div>
                    </div>
                        <div className='col-4' id='home'>
                            <div className="home-sub">
                                WHAT I DO
                            </div>
                            <div className="home-text">
                                I am a student at the <b>University of Alabama majoring in Computer Science</b>. I have passions in <b>full-stack</b> software engineering
                                with an emphasis in Web Design. My goal in my career is to create innovative software that benefit both the consumer and the 
                                business by implementing <b>efficient backends</b> with beautiful, <b>easy to use frontends.</b> I am constantly seeking to push 
                                myself closer to this goal; Currently I am learning the <b>MERN</b> tech stack, along with other notable frameworks.
                            </div>
                        </div>
                        <div className='col-8'>
                        </div>
                </div>
        <div className="about-container" id="about">
            <div className="row">
                <div className="col-10">
                    <div className="row">
                        <div className='col-4'>
                            <div className="about-sub">
                                EDUCATION
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className="about-text">
                                <p><b>University of Alabama:</b> BS in Computer Science - DEC 2025</p>
                                <p><b>*UA Competitive Acheivement Scholarship:</b> Full Tuition</p>
                                <p><b>*GPA:</b> 3.615</p>
                                <p><b>*Classes:</b> Discrete Mathematics, DSA, Microcomputers, Operating Systems, Database Management Systems</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-4'>
                            <div className="about-sub">
                                EXPERIENCE
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className="about-text">
                                <p><b>IT Intern:</b> Piston Automotive - Summer 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-4'>
                            <div className="about-sub">
                                TECH STACK
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className="about-text">
                                <p><b>Languages:</b> C/C++, Python, JS/HTML/CSS</p>
                                <p><b>Frameworks:</b> Flask, Bootstrap</p>
                                <p><b>Libraries/Technologies:</b> React, Git, Matlab</p>
                                <p><b>Databases:</b> SQLite, MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-4'>
                            <div className="about-sub">
                                ACHIEVEMENTS
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className="about-text">
                                <p><b>National Indigenous Recognition Scholar:</b> 2021</p>
                                <p><b>Presidents List:</b> Fall 2022</p>
                                <p><b>Deans List:</b> Fall 2023, Spring 2024</p>
                            </div>
                        </div>
                    </div>
                        <div className="col-10">
                            <div className="fineprint">
                                THE FINEPRINT: 
                                <p>Automotive Enthusiast</p>
                                <p>Athlete</p>
                                <p>Gamer</p>
                                <p>Artist</p>
                                <p>Musician</p>
                                <p>Teammate</p>
                            </div>
                        </div>
                </div>
                <div className="col-2">
                    <div className="home-sub-side">
                        WHO I AM
                    </div>
                </div>
            </div>
        </div>
        <div className="project-container" id='projects'>
            <div className="row">
                <div className="project-sub">
                    PROJECTS
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className="title">Time Check</p>
                    <p>Created with Python, Flask, Ajax, HTML/CSS and JavaScript. Time Checker is a web app that reports the amount of time left until the next break in the work day. It also displays the
                        percentage the user is currently through their work day. This was created
                        during my Piston Internship. There are three shifts, and every shift has two breaks. The user can choose to see a particular
                        shift or display information for all.
                    </p>
                    <li><a href="https://github.com/aliburkemper12/time-checker-repo.git" target="_blank">View Repo on GitHub</a></li>
                </div>
                <div className="col-4">
                    <p className="title">Inventory System</p>
                    <p>Created with Python, Flask, Ajax, SQLite/SQLAlchemy, HTML/CSS/JS, and Werkzeug.security. This inventory system was created for the IT
                        department at Piston Automotive during my internship. The software features a login and admin login with hashed/salted passwords.
                        Pictures of each of the views can be found at the github repo. User's can access the full database which displays items and all their
                        attributes. Users can add, edit, and delete items. Admin's can create and delete user's account. Features searching, sorting, 
                        and alerts for low quantities.
                    </p>
                    <li><a href="https://github.com/aliburkemper12/inventory-system-piston.git" target="_blank">View Repo on GitHub</a></li>
                </div>
                <div className="col-4">
                    <p className="title">Chocoholics Anonymous</p>
                    <p>This project was created during my software engineering class with 5 other contributors. Built with Java, HTML/CSS/JS, Apache
                        and ANT.
                        The software features a GUI that managers,
                        operators, providers, and members can all access and view their specified information. Managers can manage access, operators 
                        can view members and their information, providers can add members, and members can view their bills and pay them.
                    </p>
                    <li><a href="https://github.com/aliburkemper12/Chocoholics-Anonymous.git" target="_blank">View Repo on GitHub</a></li>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className="title">ATS</p>
                    <p>A static website created for a client made with ReactJS, Bootstrap and HTML/CSS. Features self-made graphics and a slick design.
                    </p>
                    <li><a href="https://github.com/aliburkemper12/ats.git" target="_blank">View Repo on GitHub</a></li>
                </div>
                <div className="col-4">
                    <p className="title">Personal Portfolio</p>
                    <p>What you are looking at now! This website was made with ReactJS, Bootstrap and HTML/CSS.</p>
                    <li><a href="https://github.com/aliburkemper12/personal-portfolio.git" target="_blank">View Repo on GitHub</a></li>
                </div>
                <div className="col-4">
                    <p className="title">Coming soon..</p>
                </div>
            </div>
        </div>
        <div className="contact-container" id='contact'>
            <div className="row">
                <div className="project-sub">
                    CONTACT
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                </div>
                <div className="col-6">
                    <div className="about-text">
                        Need to contact me? You have options!
                    </div>
                    <div className="about-text">
                    <p>Email: aliburkemper12@gmail.com</p>
                    <p>Phone: 636-445-0732</p>
                    <p>LinkedIn:</p>
                    </div>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>
        </div>
    );
}