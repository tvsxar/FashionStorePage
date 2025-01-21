import './sale.css';
import saleImg from '../../img/images/promo-img.jpg';

function Sale() {
    return (
        <section className="sale">
                <div className="sale-section">
                    <img src={saleImg} alt='sale-img' className="sale-img" />

                    <div className="sale-content">
                        <h1 className="sale-title"><span className='highlight'><span>PAYDAY</span></span> SALE NOW</h1>
                        
                        <p className="sale-desc">Spend minimal $100 get 30% off voucher code for your next purchase</p>

                        <h2 className="sale-date">1 June - 10 June 2021</h2>

                        <p className="sale-terms">*Terms & Conditions apply</p>

                        <div className="sale-button">
                            <a href='#!' className="sale-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Sale;