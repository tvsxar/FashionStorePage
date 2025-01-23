import './footer.css';
import facebookImg from '../../img/socials/fb.svg';
import instagramImg from '../../img/socials/inst.svg';
import twitterImg from '../../img/socials/tw.svg';
import linkedinImg from '../../img/socials/in.svg';

function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="left-content">
                        <h1 className="footer-title">FASHION</h1>
                        <p className="footer-desc">Complete your style with awesome clothes from us.</p>
                        <div className="footer-socials">
                            <a href="#!"><img src={facebookImg} alt="facebook" /></a>
                            <a href="#!"><img src={instagramImg} alt="instagram" /></a>
                            <a href="#!"><img src={twitterImg} alt="twitter" /></a>
                            <a href="#!"><img src={linkedinImg} alt="linkedin" /></a>
                        </div>
                    </div>

                    <div className="right-content">
                        <div className="nav-block">
                            <h2 className="nav-block-title">Company</h2>

                            <ul>
                                <li><a href="#!" className="nav-block-item">About</a></li>
                                <li><a href="#!" className="nav-block-item">Contact us</a></li>
                                <li><a href="#!" className="nav-block-item">Support</a></li>
                                <li><a href="#!" className="nav-block-item">Careers</a></li>
                            </ul>
                        </div>

                        <div className="nav-block">
                            <h2 className="nav-block-title">Quick Link</h2>

                            <ul>
                                <li><a href="#!" className="nav-block-item">Share Location</a></li>
                                <li><a href="#!" className="nav-block-item">Orders Tracking</a></li>
                                <li><a href="#!" className="nav-block-item">Size Guide</a></li>
                                <li><a href="#!" className="nav-block-item">FAQs</a></li>
                            </ul>
                        </div>

                        <div className="nav-block">
                            <h2 className="nav-block-title">Legal</h2>

                            <ul>
                                <li><a href="#!" className="nav-block-item">Terms & conditions</a></li>
                                <li><a href="#!" className="nav-block-item">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;