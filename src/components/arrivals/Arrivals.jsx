import './arrivals.css'
import Card from '../card/Card'
import cat01Img from '../../img/categories/01.jpg'
import cat02Img from '../../img/categories/02.jpg'
import cat03Img from '../../img/categories/03.jpg'

function Arrivals() {
    return(
        <section className="arrivals">
            <div className="container">
                <div className="arrivals-header">
                    <h2 className="arrivals-title">NEW ARRIVALS</h2>
                </div>
                <div className="arrivals-cards">
                    <Card title='Hoodies & Sweetshirt' img={cat01Img} />
                    <Card title='Coats & Parkas' img={cat02Img} />
                    <Card title='Tees & T-Shirt' img={cat03Img} />
                </div>
            </div>
        </section>
    )
}

export default Arrivals;