import React from "react";
import Banner_icon from "../assets/banner_icon.png.webp"
import Separation_banner from "../assets/Separation_banner.jpg.avif"
import "../styles/Banner.css"

const Banner =() => {
    return (
        <>
        <div className="banner">
            <div className="banner__text">
                <div className="banner__text__hello">
                    <p className="banner__text__hello-super">super</p>
                    <p className="banner__text__hello-hello">hello</p>
                </div>
                <div className="banner__text__description">
                    <p className="banner__text__description-agency">A design agency….kinda</p>
                    <p className="banner__text__description-promotion">Unlimited revisions and a flat monthy fee.</p>
                    <button className="banner__button">See Plans</button>
                </div>
            </div>
            <img className="banner__icon" src={Banner_icon} alt="" />
        </div>
        <div className="banner__separation-container">
            <img className="banner__separation" src={Separation_banner} alt="division banner" />
        </div>
        </>
    )
}

export default Banner;