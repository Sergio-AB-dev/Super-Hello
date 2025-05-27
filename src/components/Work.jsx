import React from "react";
import "../styles/Work.css"
import Work_card from "./Work_card"
import work1 from "../assets/rain_simbol.jpg.avif"
import work2 from "../assets/paper_simbol.jpg.avif"
import work3 from "../assets/eye_simbol.jpg.avif"
import work_division from "../assets/division_works.jpg.avif"


const Work = () => {
    return (
        <>
        <div className="work" id="work">
            <p className="work_title">How it works</p>
            <div className="work_cards">
                <Work_card Imgsrc={work1} title="Subscribe" text="Kickstart your design adventure by hopping on our monthly subscription. For just $2k, you get unlimited dibs on top-notch design work."/>
                <Work_card Imgsrc={work2} title="Request" text="Alright, you're in! Now, it's time to toss your design tasks our way. Need a branding concept? A sleek landing page design? Or maybe a standout trifold brochure? No sweat. Just keep those requests coming!"/>
                <Work_card Imgsrc={work3} title="Review" text="Hold tight! In just 48 hours, you'll get your first peek at your completed design. And if it's not love at first sight, no worries! We can tweak and tune it until it's just right - that's the beauty of unlimited revisions."/>
            </div>
        </div>
        <div className="work__special">
            <p className="work_special-title">We've got you… Branding, Apps and Web Design</p>
            <div className="work__special__container">
                <ul className="work__special__container__design">
                    <li className="work__special__container__design-title">Design</li>
                    <li className="work__special__container__design-item">Branding</li>
                    <li className="work__special__container__design-item">Brochures</li>
                    <li className="work__special__container__design-item">Pitch Decks</li>
                    <li className="work__special__container__design-item">Social Media</li>
                </ul>
                <ul className="work__special__container__web">
                    <li className="work__special__container__web-title">Web</li>
                    <li className="work__special__container__web-item">Landing Pages</li>
                    <li className="work__special__container__web-item">Marketing websites</li>
                    <li className="work__special__container__web-item">Responsive Design</li>
                    <li className="work__special__container__web-item">Interactions</li>
                </ul>
                  <ul className="work__special__container__uiux">
                    <li className="work__special__container__uiux-title">UI/UX</li>
                    <li className="work__special__container__uiux-item">App Design</li>
                    <li className="work__special__container__uiux-item">Wireframing</li>
                    <li className="work__special__container__uiux-item">Prototyping</li>
                    <li className="work__special__container__uiux-item">High Fidelity prototypes</li>
                </ul>
            </div>
        </div>
        <div className="work_division">
            <img className="work_division-img" src={work_division} alt="" />
        </div>
        </>
    )
}

export default Work;