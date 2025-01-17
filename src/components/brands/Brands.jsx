import './brands.css'

import hm from '../../img/brands/HM.png'
import obey from '../../img/brands/Obey.png'
import shopify from '../../img/brands/Shopify.png'
import lacoste from '../../img/brands/Lacoste.png'
import levis from '../../img/brands/Levis.png'
import amazon from '../../img/brands/Amazon.png'

function Brands() {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brands-list">
                    <li><img src={hm} alt="hm" /></li>
                    <li><img src={obey} alt="obey" /></li>
                    <li><img src={shopify} alt="shopify" /></li>
                    <li><img src={lacoste} alt="lacoste" /></li>
                    <li><img src={levis} alt="levis" /></li>
                    <li><img src={amazon} alt="amazon" /></li>
                </ul>
            </div>
        </section>
    )
}

export default Brands;