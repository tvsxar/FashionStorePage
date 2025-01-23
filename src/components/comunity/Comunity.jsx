import './comunity.css';

function Comunity() {
    return (
        <section className="comunity">
            <div className="container">
                <div className="comunity-content">
                    <h1 className="comunity-title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
                    <p className="comunity-desc">Type your email down below and be young wild generation</p>

                    <form className='comunity-form' action='/submit'>
                        <input className='comunity-input' placeholder='Add your email here' type="text" required />
                        <button href="#!" className='comunity-send-btn'>SEND</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Comunity;