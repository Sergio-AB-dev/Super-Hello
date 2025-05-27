import React from "react";
import "../styles/Pricing_card.css";
import check from "../assets/garrapata.png"

const PricingCard = ({Imgsrc,title,subtitle,pricing})=> {
    return (
        <div className="pricing_card">
            <img className="pricing_card-img" src={Imgsrc} alt={title} />
            <p className="pricing_card-title">{title}</p>
            <p className="pricing_card-subtitle">{subtitle}</p>
            <p className="pricing_card-pricing">{pricing}</p>
            <ul className="pricing_card-list">
                <li className="pricing_card-list-item"><img src={check}/>Unlimited requests worked on one at a time</li>
                 <li className="pricing_card-list-item"><img src={check}/>Unlimited requests worked on one at a time</li>
                  <li className="pricing_card-list-item"><img src={check}/>Unlimited requests worked on one at a time</li>
                   <li className="pricing_card-list-item"><img src={check}/>Unlimited requests worked on one at a time</li>
                    <li className="pricing_card-list-item"><img src={check}/>Unlimited requests worked on one at a time</li>
                     <li className="pricing_card-list-item"><img src={check}/>Unlimited requests worked on one at a time</li>
            </ul>
            <button className="pricing_card-button">Not slot available</button>
            <p className="pricing_card-footer">Book a call</p>
        </div>
    )
}

export default PricingCard;