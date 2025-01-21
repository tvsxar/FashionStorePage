import './favourite.css';
import imgFav1 from '../../img/images/01.jpg'
import imgFav2 from '../../img/images/02.jpg'
import Card from '../card/Card'

function Favourite() {
    return (
        <section className="favourite">
            <div className="container">
                <div className="favourite-content">
                    <h1 className="favourite-title">Young’s <span className='fav-title'>Favourite</span></h1>

                    <div className="favourite-cards">
                        <Card title={'Trending on instagram'} img={imgFav1} />
                        <Card title={'All Under $40'} img={imgFav2} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Favourite;