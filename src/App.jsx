import AboutUs from "./components/AboutUs"
import Gallery from "./components/Gallery"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="body">
                <Home />
                <Gallery />
                <AboutUs />
            </div>
        </div>
    )
}

export default App
