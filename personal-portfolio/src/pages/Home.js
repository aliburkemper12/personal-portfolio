import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import link from '../img/link.png'
import { Fade } from "react-awesome-reveal";
import headshot from "../img/headshot_transparent.png"
import timecheck from "../img/timecheck.png"
import inventory from "../img/home_snip.png"
import jtportfolio from "../img/jt-portfolio.png"

export default function Home() {
    return (
        <div className="container-fluid">
                <div className='row'>
                    <div className='home-container'>
                        <div className="inner">
                            <div className='header'>
                                ALI BURKEMPER
                            </div>
                            <div className='header-sub'>
                                STUDENT | PROGRAMMER | DESIGNER
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-4 py-5' id='home'>
                        <Fade>
                            <div className='col-lg-12 py-5' id='home'>
                                <div className="home-sub">
                                    WHAT I DO
                                </div>
                                <div className="home-text">
                                    I am a student at the <b>University of Alabama majoring in Computer Science</b>. As I work towards finishing my <b>undergrad,</b> I am becoming more and more interested in <b>data and project management.</b>
                                    While still figuring out my path, I am continuing to learn <b>front-end skill</b> on my own time while diving into <b>back-end and data skills</b> in my studies.
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='col-lg-8 col-12'>
                        <img src={ headshot } className="headshot" alt="headshot"/>
                    </div>
                </div>
        <div className="about-container" id="about">
            <div className="row">
                <div className="col-lg-10 col-12">
                    <div className="row">
                        <div className='col-lg-4 col-12'>
                            <div className="about-sub">
                                EDUCATION
                            </div>
                        </div>
                        <div className='col-lg-8 col-12'>
                            <div className="about-text">
                                <p><b>University of Alabama:</b> BS in Computer Science - MAY 2026</p>
                                <p><b>*UA Competitive Acheivement Scholarship:</b> Full Tuition</p>
                                <p><b>*GPA:</b> 3.642</p>
                                <p><b>*Classes:</b> Discrete Mathematics, DSA, Microcomputers, Operating Systems, Database Management Systems, Data Science, Computer Algorithms, Programming Languages, Linear Algebra</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-4 col-12'>
                            <div className="about-sub">
                                EXPERIENCE
                            </div>
                        </div>
                        <div className='col-lg-8 col-12'>
                            <div className="about-text">
                                <p><b>IT Analyst Intern:</b> Piston Automotive - Summer 2024</p>
                                <p>Collaborated with production and IT teams to support production systems and troubleshoot IT issues across both office and manufacturing environments.
                                    Gained hands-on experience with production SQL databases.
                                    Worked on various projects, including inventory system and a shift web page that can be found below.
                                    Partnered with process engineers to implement real-time dashboards driving visibility into key performance metrics.
                                    Contributed to UI/UX improvements on shop-floor workstations, enhancing usability and efficiency for production operators.
                                </p>
                            </div>
                            <div className="about-text">
                                <p><b>Business Process Analyst Intern:</b> Centene Corporation - Summer 2025</p>
                                <p>
                                    Conducting interviews with key stakeholders to understand current workflows, pain points, and improvement opportunities.
                                    Designing a comprehensive process map that outlines the full claims lifecycle, from initiation to resolution.
                                    Delivering insights to leadership and project teams to inform decision-making and strategy development.
                                    Supporting ongoing efforts to streamline operations, enhance efficiency, and align initiatives with business goals
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-4 col-12'>
                            <div className="about-sub">
                                TECH STACK
                            </div>
                        </div>
                        <div className='col-lg-8 col-12'>
                            <div className="about-text">
                                <p><b>Languages:</b> C/C++, Python, JS/HTML/CSS, Scheme, Prolog</p>
                                <p><b>Frameworks:</b> Flask, Bootstrap, Node</p>
                                <p><b>Libraries/Technologies:</b> React, Git, Matlab</p>
                                <p><b>Databases:</b> Microsft SQL, Oracle, MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-4'>
                            <div className="about-sub">
                                ACHIEVEMENTS
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className="about-text">
                                <p><b>National Indigenous Recognition Scholar:</b> 2021</p>
                                <p><b>Presidents List:</b> Fall 2022</p>
                                <p><b>Deans List:</b> Fall 2023, Spring 2024, Fall 2024, Spring 2025</p>
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-10">
                            <div className="fineprint">
                                THE FINEPRINT: 
                                <p>Athlete</p>
                                <p>Gamer</p>
                                <p>Artist</p>
                                <p>Musician</p>
                                <p>Teammate</p>
                            </div>
                        </div>
                </div>
                    <div className="col-2 d-none d-lg-inline">
                        <div className="home-sub-side">
                            WHO I AM
                        </div>
                    </div>
            </div>
        </div>
        <div className="project-container" id='projects'>
            <div className="row">
                <div className="project-sub">
                    <Fade>
                        PROJECTS
                    </Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <p><a className="title" href="https://github.com/aliburkemper12/time-checker-repo.git" target="_blank" rel="noreferrer"><b>Time Check<img className='pic' src={link} alt="link"></img></b></a></p>
                    <img src={ timecheck } alt="timecheck" className="preview"></img>
                    <p>Created with Python, Flask, Ajax, HTML/CSS and JavaScript. Time Checker is a web app that reports the amount of time left until the next break in the work day. It also displays the
                        percentage the user is currently through their work day. This was created
                        during my Piston Internship for employees to monitor. There are three shifts, and every shift has two breaks. The user can choose to see a particular
                        shift or display information for all.
                    </p>
                </div>
                <div className="col-lg-4">
                    <p><a className="title" href="https://github.com/aliburkemper12/inventory-system-piston.git" target="_blank" rel="noreferrer"><b>Inventory System<img className='pic' src={link} alt="link"></img></b></a></p>
                    <img src={ inventory } alt="inventory" className="preview"></img>
                    <p>Created with Python, Flask, Ajax, SQLite/SQLAlchemy, HTML/CSS/JS, and Werkzeug.security. This inventory system was created for the IT
                        department at Piston Automotive during my internship to keep track of important inventory such as 
                        production labels and ribbon. The software features a login and admin login with hashed/salted passwords.
                        Pictures of each of the views can be found at the github repo. User's can access the full database which displays items and all their
                        attributes. Users can add, edit, and delete items. Admin's can create and delete user's account. Features searching, sorting, 
                        and alerts for low quantities.
                    </p>
                </div>
                <div className="col-lg-4">
                    <p><a className="title" href="https://jashawntaylor.com" target="_blank" rel="noreferrer"><b>JT Portfolio<img className='pic' src={link} alt="link"></img></b></a></p>
                    <img src={ jtportfolio } alt="jt-portfolio" className="preview"></img>
                    <p>A portfolio website created for a client for his basketball recruitement. Created using WordPress. Learned how to embed youtube links using WordPress' plugins. Created a visually appealing color scheme that flows through the page. 
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <p><a className="title" href="https://github.com/aliburkemper12/Chocoholics-Anonymous.git" target="_blank" rel="noreferrer"><b>Chocoholics Anonymous<img className='pic' src={link} alt="link"></img></b></a></p>
                    <p>This project was created during my software engineering class with 5 other contributors. The goal of this project was to build 
                        a system for a hypothetical company and practice backend development.
                        Built with Java, HTML/CSS/JS, Apache
                        and ANT.
                        The software features a GUI that managers,
                        operators, providers, and members can all access and view their specified information. Managers can manage access, operators 
                        can view members and their information, providers can add members, and members can view their bills and pay them. Utilizes data structures
                        to store data.
                    </p>
                </div>
                <div className="col-lg-4">
                    <p><a className="title" href="https://github.com/aliburkemper12/personal-portfolio.git" target="_blank" rel="noreferrer"><b>Personal Portfolio<img className='pic' src={link} alt="link"></img></b></a></p>
                    <p>What you are looking at now! This website was made with ReactJS, Node, Bootstrap and HTML/CSS.</p>
                </div>
                <div className="col-lg-4">
                    <p className="title"><b>Coming soon..</b></p>
                </div>
            </div>
        </div>
        <div className="contact-container" id='contact'>
            <div className="row">
                <div className="col-lg-3 col-1">
                    <div className="row h-25"></div>
                    <div className="row">
                        <div className="block"></div>
                    </div>
                    <div className="row"></div>
                </div>
                <div className="col-lg-6 col-10">
                    <div className="row">
                    <div className="project-sub my-5">
                        CONTACT
                    </div>
                    </div>
                    <div className="about-text">
                        Want to reach out? Here's where you can find me:
                    </div>
                    <div className="contact-text">
                        <p><b>Email:</b> aliburkemper12@gmail.com</p>
                        <p><b>Phone:</b> 636-445-0732</p>
                        <a href='https://linkedin.com/in/ali-burkemper-aa53b0256' target='_blank' rel="noreferrer"><img className="pic" src={linkedin} alt="linkedin"></img></a>
                        <a href='https://github.com/aliburkemper12' target='_blank' rel="noreferrer"><img className="pic" src={github} alt="github"></img></a>
                    </div>
                </div>
                <div className="col-lg-3 col-1">
                    <div className="row h-25"></div>
                    <div className="row">
                        <div className="block"></div>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
        </div>
        </div>
    );
}