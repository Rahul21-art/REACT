import "./Productcard.css"
const motorolaIcon = "motorola.jpg"
function Productcard(product) {
    return (
        <>


            <div className="image">
                    <img className="image" src={motorolaIcon} alt="motorola" />


                     </div>
            <div className="card">
                
                <h2 className='name'>Product Name:{product.a}</h2>
                <h3 className='price'>Price:{product.b}</h3>
                {product.c===true?<p className="availability"> In stock</p>:<p className="notavailability">out of stock</p>}
            </div >
        </>
    )
}

export default Productcard