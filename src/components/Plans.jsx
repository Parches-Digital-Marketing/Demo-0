export default function Plans() {
    return (
        <div className="plans-container">
            <div className="scroll" name="plans"></div>
            <h2 className="plans__title">Nuestros <span className="about-us__title-color">Planes</span></h2>
            <ul className="list">
                <li className="list__item">
                    <span className="list__text">1 mes <span className="list__cost">$3000</span></span>
                </li>
                <li className="list__item">
                    <span className="list__text">1 turno <span className="list__cost">$500</span></span>
                </li>
                <li className="list__item">
                    <span className="list__text">4 turnos <span className="list__cost">$375</span><span className="list__total-cost">total $1500</span></span>
                </li>
                <li className="list__item">
                    <span className="list__text">10 turnos <span className="list__cost">$250</span><span className="list__total-cost">total $2500</span></span>
                </li>
                <li className="list__item">
                    <span className="list__text">20 turnos <span className="list__cost">$225</span><span className="list__total-cost">total $4500</span></span>
                </li>
            </ul>
        </div>
    )
}
