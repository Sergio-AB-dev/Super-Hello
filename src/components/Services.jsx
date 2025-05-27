import React from "react";
import services__icon from "../assets/Services__icon.png.webp"
import "../styles/Services.css"

const Services= ()=> {
    return (
        <>
        <div className="services">
            <div className="services__text">
                <p className="services__text__title">The future of design services</p>
                <p className="services__text__description">Need stunning graphic design, intuitive UI/UX, or eye-catching web design?  Welcome home. We're Super Hello, your design partner for a flat monthly fee. We're all about delivering good creative in a new way.</p>
            </div>
            <img className="services__icon" src={services__icon} alt="" />
        </div>
        </>
    )
}

export default Services;