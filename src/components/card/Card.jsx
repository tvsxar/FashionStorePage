import './card.css'
import arrowImg from '../../img/icons/Arrow 4.svg'

function Card( {title, img} ) {
    return (
        <div className="card">
            <a href="#!" className="card-link"></a>
            <img className='card-img' src={img} alt="card-img" />

            <div className="card-body">
                <div className="card-text">
                    <div className="card-title">{title}</div>
                    <div className="card-muted">Explore Now!</div>
                </div>

                <div className="card-icon"><img src={arrowImg} alt="arrow" /></div>
            </div>
        </div>
    )
}

export default Card;