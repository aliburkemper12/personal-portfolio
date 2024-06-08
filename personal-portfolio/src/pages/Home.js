import pic from '../img/anon_profile.jpg'
export default function Home() {
    return (
        <container className="container">
            <div className="home">
                <p className="header"><span className="font-link">Title</span></p>
            </div>
            <p className='home-body'>
                <img className="pic" src={ pic } alt="Headshot" />
                <p className='home-text'><span className="font-link">Random text Random text Random text Random text Random text Random text 
                Random text Random text Random text Random text Random text Random text Random text 
                Random text Random text Random text Random text Random text Random text Random text</span></p>
            </p>
        </container>
    );
}