import { Link } from 'react-scroll'

function Home() {
    return (
        <div className="home" name="home">
            <div className="home__filter"></div>
            <div className="welcome">
                <h2 className="home__text">Conocé el GYM más elegido de todo Saavedra!</h2>
                <button className="home__button"><Link activeClass="active" className="home__link" to="plans" spy={true} smooth={true} duration={500}>Ver planes</Link></button>
            </div>
        </div>
    )
}

export default Home