import React from 'react';
import style from './Product.module.scss';

export const Product = (props) => {
    const photo = {
        backgroundImage: 'url(' + props.urlImage + ')',
    }
    return (
        <div className={style.productContainer}>
            <div className={style.imgContainer}>
                <div className={style.img} style={photo}/>
            </div>
            <div className={style.text}>{props.text}</div>
            <div className={style.price}>{props.price} $</div>
            <div className={style.button}>
                {props.buttonText}
            </div>
        </div>
    );
};
