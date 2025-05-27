import React  from "react";
import "../styles/Jobs.css";
import Jobs_card from "./Jobs_card";
import icon1 from "../assets/Work_ilustrate1.jpg.avif"
import icon2 from "../assets/Work_ilustrate2.png.avif"
import ilustration1 from "../assets/Work_image1.jpg.avif"
import ilustration2 from "../assets/Work_image2.jpg.avif"
import Separation_banner from "../assets/Separation_banner.jpg.avif"


const Jobs = ()=> {
    return (
        <>
        <div className="jobs" id="jobs">
            <p className="jobs_title">What we've been up to…</p>
            <Jobs_card Imgsrc1={icon1} Imgsrc2={ilustration1} title="Unlimited Do-Overs & Wishlists" text="At a single monthly rate, you get to call the shots with unlimited design requests and revisions. Keep tweaking until your design hits the sweet spot. You dream it, we design it!" />
             <Jobs_card Imgsrc1={icon2} Imgsrc2={ilustration2} title="Unlimited Do-Overs & Wishlists" text="At a single monthly rate, you get to call the shots with unlimited design requests and revisions. Keep tweaking until your design hits the sweet spot. You dream it, we design it!" className="jobs_card_second" />
        </div>
        <div className="jobs_sepation">
            <img src={Separation_banner} alt=""/>
        </div>
        </>
    )
}

export default Jobs;