import React  from "react";
import "../styles/pricing.css"
import slot from "../assets/pricing_slot.png.webp"
import icon from "../assets/pricing_icon.png.webp"
import PricingCard from "./Pricing_card";
import img1 from "../assets/gestion-del-tiempo.png"
import img2 from "../assets/equipo.png";

const Pricing = () => {
    return (
        <>
        <div className="pricing" id="pricing">
            <div className="pricing_text">
                <p className="pricing_text-title">Dont just start up… Blast off</p>
                <p>At a single monthly rate, you get to call the shots with unlimited design requests and revisions</p>
                <p className="pricing_text-subtitle">Secure your slot</p>
                <p>We value each of our clients and aim to provide exceptional service. To maintain our high standards, we only open up a handful of spots each month. This approach ensures that you receive the attention and expert service you deserve.</p>
                <img className="pricing_slot" src={slot} alt="" />
            </div>
            <img className="pricing-icon" src={icon} alt="" />
        </div>
        <div className="pricing_cards">
            <PricingCard Imgsrc={img1} title="Monthly" subtitle="No minimum commitment. Pause or cancel anytime." pricing="$1,995"/>
            <PricingCard Imgsrc={img2} title="Quarterly" subtitle="Save $200 per month." pricing="$1,795"/>
        </div>
        </>
    )
}

export default Pricing;