import './promo.css';
import promoImg from '../../img/images/header-img.jpg'

function Promo() {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo-content">
                    <div className="promo-text">
                        <div className="promo-title"><span className='highlight'><span>LET’S</span></span>
                         EXPLORE <span className='highlight highlight--yellow'><span>UNIQUE</span></span> CLOTHES.</div>
                        <div className="promo-desc">Live for Influential and Innovative fashion!</div>
                        <div className="promo-btn-wrapper"><a href='#!' className='promo-btn'>Shop Now</a></div>
                    </div>
                    <div className="promo-img"><img src={promoImg} alt='promo-img' /></div>
                </div>
            </div>
        </section>
    )
}

export default Promo;