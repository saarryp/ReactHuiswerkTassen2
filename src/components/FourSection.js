import React from "react";

function FourSection({textContent, img, title}){
    return (
        <section>
            <p>{textContent}</p>
            <img  src={img} alt={title}/>
        </section>
    )
}

export default FourSection