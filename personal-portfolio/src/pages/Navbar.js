export default function Navbar() {
    return (
                <nav className="navbar sticky-top">
                    <div className="col-3 mx-4">
                        <div className="name">
                            <a className="nav-name">Ali Burkemper</a>
                        </div>
                    </div>
                    <div className="col-6 mx-3">
                        <div id="navbar-link">
                            <a className="nav-text" href="#home"><span className="font-link">Home</span></a>
                            <a className="nav-text" href="#about"><span className="font-link">About</span></a>
                            <a className="nav-text" href="#projects"><span className="font-link">Projects</span></a>
                            <a className="nav-text" href="#contact"><span className="font-link">Contact</span></a>
                        </div>
                    </div>
                </nav>
    );
}