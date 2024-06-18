export default function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar">
                    <div className="col-3 mx-4">
                        <div className="name">
                            <a className="nav-name">Ali Burkemper</a>
                        </div>
                    </div>
                    <div className="col-6 mx-3">
                        <div id="navbar-link">
                            <a className="nav-text" href="/"><span className="font-link">Home</span></a>
                            <a className="nav-text" href="/About"><span className="font-link">About</span></a>
                            <a className="nav-text" href="/Projects"><span className="font-link">Projects</span></a>
                            <a className="nav-text" href="/Contact"><span className="font-link">Contact</span></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}