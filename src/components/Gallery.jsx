import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'

function Gallery() {
    const images = [{url: image2}, {url: image1}, {url: image7}, {url: image4}, {url: image5}, {url: image6}]

    return (
        <div className="gallery" name="gallery">
            <h2 className="gallery__title">Nuestra <span className="gallery__title-color">Galería</span></h2>
            <ul className="list">
                {images.map((image, id) => {
                    return (
                        <li className="list__item" key={id}>
                            <img className="list__image" src={image.url} alt="galleryImage" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Gallery