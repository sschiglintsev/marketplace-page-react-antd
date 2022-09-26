import React from 'react';
import style from './Footer.module.scss';
import GREEN from "../../assets/images/Green.png";

export const Footer = () => {
    const photo = {
        backgroundImage: 'url(' + GREEN + ')',
    };
    return (
        <div className={style.footerBlock}>
            <div className={style.logoContainer}>
                <div className={style.logo} style={photo}/>
            </div>
            <div className={style.line}/>
            <div className={style.blockOneContainer}>
                <div className={style.blockOne}>
                    <span className={style.title}>Head Office</span>
                    <span className={style.text}>32 Plum St, Trenton, NJ</span>
                    <span>08638, United States</span>
                    <span className={style.text}>01789 730695</span>
                    <span>support@Meridian.com</span>
                </div>
            </div>

        </div>
    );
};
