import React from "react";
import "../styles/Benefits_card.css"

const Benefits_card = ({Imgsrc, title, text}) => {
    return (
        <div className="benefits_card">
            <img className="benefits_card-img" src={Imgsrc} alt={title} />
            <div className="benefits_card-text-container">
                <p className="benefits_card-text-title">{title}</p>
                <p className="benefits_card-text-description">{text}</p>
            </div>
        </div>
    )
}

export default Benefits_card;