import React from 'react';


function Product({typeOfSell, img, title,  typeOfBag, priceOfBag}) {

    return (
        <article>
            <span>{typeOfSell}</span>
            <img src={img} alt={title}/>
            <p>{typeOfBag}</p>
            <h4>€{priceOfBag}</h4>
        </article>
    )
}

export default Product