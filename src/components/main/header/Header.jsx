import React from 'react';
import style from "./Header.module.scss";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.text}>
                spring seaSon sale | 20% off entire store | Free Premium UK Delivery
            </div>
        </div>
    );
};
