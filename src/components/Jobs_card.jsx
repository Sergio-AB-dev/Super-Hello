import React from "react";
import "../styles/Jobs_card.css"

const Jobs_card = ({Imgsrc1, Imgsrc2, title, text, className})=> {
    return (
        <>
        <div className={`jobs_card ${className}`}>
            <div className="jobs_card-icon">
                <img src={Imgsrc1} alt={title} />
                <p className="jobs__card-title">{title}</p>
                <p>{text}</p>
            </div>
             <div className="jobs_card-image">
                <img src={Imgsrc2} alt={title} />
                <p className="jobs__card-title">{title}</p>
                <p>{text}</p>
            </div>
    </div>
        </>
    )
}

export default Jobs_card;