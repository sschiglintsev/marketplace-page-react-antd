import React from 'react';
import style from './ManufacBlock.module.scss'
import MANUF from "../../assets/images/manufac.png";
import IGLA from "../../assets/images/igla.png";

export const ManufacBlock = () => {
    const photo = {
        backgroundImage: 'url(' + MANUF + ')',
    };
    const photo1 = {
        backgroundImage: 'url(' + IGLA + ')',
    };
    return (
        <div className={style.manufacBlock}>
            <div className={style.manufacContainer} style={photo}>
                    <div className={style.imgContainer} style={photo1}>
                    </div>
                    <div className={style.titleBlock}>
                        <span className={style.title}>COMMITED TO EUROPIAN MANUFACTURING</span>
                    </div>
                    <div className={style.textBlock}>
                        <span className={style.text}>our Products are made with high quality european fabric and sewn by a small team CRAFTSPEOPLE in EUROPE</span>
                    </div>
            </div>
        </div>
    );
};
