import { useState } from 'react';
import "../styles/Header.css"
import menu__hamburguesa from "../assets/menu-hamburguesa.png"

const Header =()=> {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    
    return (
       <>
        <header className="header">
            <h1 className="header__title">Super Hello</h1>
            <ul className="header__list">
                <li className="hedaer__list__item"><a href="#benefits">Benefits</a></li>
                <li className="hedaer__list__item"><a href="#jobs">Recent work</a></li>
                <li className="hedaer__list__item"><a href="#work">How it works</a></li>
                <li className="hedaer__list__item"><a href="#pricing">Pricing</a></li>
            </ul>
            <button className="header__login">Log in</button>
            <button className="header__menu-mobile" onClick={toggleMenu}><img src={menu__hamburguesa} alt="" /></button>
        </header>
        {menuOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-menu__lista-mobile">
                        <li className="hedaer__list__item-mobile" onClick={toggleMenu}><a href="#benefits">Benefits</a></li>
                        <li className="hedaer__list__item-mobile" onClick={toggleMenu}><a href="#jobs">Recent work</a></li>
                        <li className="hedaer__list__item-mobile" onClick={toggleMenu}><a href="#work">How it works</a></li>
                        <li className="hedaer__list__item-mobile" onClick={toggleMenu}><a href="#pricing">Pricing</a></li>
                    </ul>
                </div>
            )}
       </>
    )
}

export default Header;