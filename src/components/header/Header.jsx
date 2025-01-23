import './header.css'
import logo from '../../img/icons/logo.svg'

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-row'>
                    <div className='header-logo'>
                        <img src={logo} alt='logo' />
                        <span>FASHION</span>
                    </div>
                    <nav className='header-nav'>
                        <ul className='list'>
                            <li><a href='#!'>CATALOGUE</a></li>
                            <li><a href='#!'>FASHION</a></li>
                            <li><a href='#!'>FAVOURITE</a></li>
                            <li><a href='#!'>LIFESTYLE</a></li>
                            <li><a href='#!' className='header-nav-btn'>SIGN IN</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;