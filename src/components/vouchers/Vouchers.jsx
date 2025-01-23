import './vouchers.css';
import voucherImg from '../../img/images/vouchers-img.png';
import appStoreImg from '../../img/icons/app-store.png';
import googlePlayImg from '../../img/icons/google-play.png';

function Vouchers() {
    return (
        <section className="vouchers">
            <div className="container">
                <div className="vouchers-content">
                    <div className="vouchers-text">
                        <h1 className="vouchers-title">DOWNLOAD APP & GET THE VOUCHER!</h1>
                        <p className="vouchers-desc">Get 30% off for first transaction using
                        Rondovision mobile app for now.</p>

                        <div className="download-icons">
                            <a href='#!'><img src={appStoreImg} alt="app-store" /></a>
                            <a href='#!'><img src={googlePlayImg} alt="google-play" /></a>
                        </div>
                    </div>

                    <img src={voucherImg} alt="voucher" />
                </div>
            </div>
        </section>
    )
}

export default Vouchers;