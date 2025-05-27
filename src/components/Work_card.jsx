import React from "react";
import "../styles/Work_card.css"

const Work_card = ({Imgsrc, title, text}) => {
    return (
        <div className="work__card">
            <img className="work__card-img" src={Imgsrc} alt={title} />
            <p className="work__card-title">{title}</p>
            <p className="work__card-text">{text}</p>
        </div>
    )
}

export default Work_card