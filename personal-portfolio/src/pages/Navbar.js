export default function Navbar() {
    return (
        <container className="navbar">
            <div className="name">
                <a className="nav-name"><span className="font-link">Name Lastname</span></a>
            </div>
            <div id="navbar-link">
                <a className="nav-text" href="/"><span className="font-link">Home</span></a>
                <a className="nav-text" href="/About"><span className="font-link">About</span></a>
                <a className="nav-text" href="/Projects"><span className="font-link">Projects</span></a>
                <a className="nav-text" href="/Contact"><span className="font-link">Contact</span></a>
            </div>
            <div className="line"></div>
        </container>
    );
}