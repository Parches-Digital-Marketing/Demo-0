export default function Plans() {
    return (
        <div className="plans-container">
            <div className="section">
                <div className="scroll" name="plans"></div>
                <div className="plans">
                    <h2 className="plans__title">Nuestros <span className="about-us__title-color">Planes</span></h2>
                    <ul className="list">
                        <li className="list__item">
                            <span className="list__text">1 mes <span className="list__cost">$3000</span></span>
                        </li>
                        <li className="list__item">
                            <span className="list__text">1 turno <span className="list__cost">$500</span></span>
                            <svg className="list__svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path className="list__path" d="M82.67,164.31 C380.79,182.08 213.60,-138.63 580.98,-9.36 L505.92,153.47 L-17.77,180.11 Z"></path></svg>
                        </li>
                        <li className="list__item">
                            <span className="list__text">4 turnos <span className="list__cost">$375</span><span className="list__total-cost">total $1500</span></span>
                            <svg className="list__svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path className="list__path" d="M82.67,164.31 C380.79,182.08 213.60,-138.63 580.98,-9.36 L505.92,153.47 L-17.77,180.11 Z"></path></svg>
                        </li>
                        <li className="list__item">
                            <span className="list__text">10 turnos <span className="list__cost">$250</span><span className="list__total-cost">total $2500</span></span>
                            <svg className="list__svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path className="list__path" d="M82.67,164.31 C380.79,182.08 213.60,-138.63 580.98,-9.36 L505.92,153.47 L-17.77,180.11 Z"></path></svg>
                        </li>
                        <li className="list__item">
                            <span className="list__text">20 turnos <span className="list__cost">$225</span><span className="list__total-cost">total $4500</span></span>
                            <svg className="list__svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path className="list__path" d="M82.67,164.31 C380.79,182.08 213.60,-138.63 580.98,-9.36 L505.92,153.47 L-17.77,180.11 Z"></path></svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
