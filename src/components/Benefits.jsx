import React from "react";
import "../styles/Benefits.css"
import Benefits_card from "./Benefits_card"
import card1 from "../assets/Benefits_star.jpg.webp"
import card2 from "../assets/Benefits_check.jpg.webp"
import card3 from "../assets/Benefits_ok.jpg.webp"
import card4 from "../assets/Benefits_dollar.jpg.webp"
import division from "../assets/division_benefits.jpg.avif"


const Benefits = () => {
    return (
        <>
        <p className="benefits_title" id="benefits">Membership benefits</p>
        <div className="benefits_card-container">
            <Benefits_card Imgsrc={card1} title="Seasoned Pro at your service" text="With a solid decade in the design biz and big names like Disney, CGV, and Zoos Victoria in the portfolio, you're in for a treat. Expect nothing less than top-drawer, professional designs for your business."/>
            <Benefits_card Imgsrc={card2} title="Unlimited Do-Overs & Wishlists" text="At a single monthly rate, you get to call the shots with unlimited design requests and revisions. Keep tweaking until your design hits the sweet spot. You dream it, we design it!"/>
            <Benefits_card Imgsrc={card3} title="Speedy Gonzales" text="Who likes to wait, right? That's why most design tasks are zoomed over to you within a 48-hour window. Your projects keep zipping along, no pit stops."/>
            <Benefits_card Imgsrc={card4} title="Big Bang for your buck" text="Get agency-level design awesomeness at a price that'll make you do a double-take. For a flat monthly fee, you get high-end design work that would cost you an arm and a leg at old school agencies."/>
        </div>
        <div className="benefits_division">
            <img className="benefits_division-img" src={division} alt="" />
        </div>
        </>
    )
}

export default Benefits;
