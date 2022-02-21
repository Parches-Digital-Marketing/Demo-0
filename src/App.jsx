import { Link } from 'react-scroll'
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Plans from "./components/Plans"

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Link activeClass="active" className="list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}><button className="scroll-top"><i className="fas fa-arrow-up"></i></button></Link>
            <div className="body">
                <Home />
                <Gallery />
                <AboutUs />
                <Plans />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
