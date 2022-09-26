import React from 'react';
import PBW from '../../../assets/images/m_1.jfif'
import style from "./Action.module.scss";

export const Action = () => {
    const photo = {
        backgroundImage: 'url(' + PBW + ')',
    }
    return (
        <div className={style.actionBlock} style={photo}>
            <div className={style.container}>
                <h1 className={style.h1}>MODERN, CONTEMPORARY OUTDOOR FURNITURE</h1>
                <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget
                    ultrices gravida gravida. Suspendisse pharetra quis eros facilisi
                </div>
                <div className={style.button}>
                    <span className={style.textButton}>
                        SHOP COLLECTIONS
                    </span>
                </div>
            </div>
        </div>
    );
};
