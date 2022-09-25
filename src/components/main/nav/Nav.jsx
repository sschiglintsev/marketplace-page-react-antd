import React from 'react';
import style from './Nav.module.scss'
import LOGO from '../../../assets/images/logo.png'
import {BsBasket3} from "react-icons/bs";
import { FiSearch} from "react-icons/fi";

export const Nav = () => {
    const photo = {
        backgroundImage: 'url(' + LOGO + ')',
    }
    return (
        <div className={style.nav}>
            <div className={style.container}>
                <div className={style.navBar}>
                    <a href={'#home'} className={style.text}>
                        <span>Home</span>
                    </a>
                    <a href={'#products'} className={style.text}>
                        <span>Products</span>
                    </a>
                    <a href={'#showroom'} className={style.text}>
                        <span>Showroom</span>
                    </a>
                    <a href={'#about'} className={style.text}>
                        <span>About Us</span>
                    </a>
                    <a href={'#contact'} className={style.text}>
                        <span>Contact</span>
                    </a>
                </div>
                <div className={style.logo} style={photo}/>
                <div className={style.navBarDetail}>
                    <a href={'#dealer'} className={style.text}>
                        <span>Dealer Login</span>
                    </a>
                    <a href={'#become'} className={style.text}>
                        <span>Become A Dealer</span>
                    </a>
                    <a href={'#find'} className={style.text}>
                        <span>Find A Retail</span>
                    </a>
                    <BsBasket3/>
                    <FiSearch/>
                </div>
            </div>
        </div>
    );
};
