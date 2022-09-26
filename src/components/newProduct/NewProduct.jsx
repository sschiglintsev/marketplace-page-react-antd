import React from 'react';
import {CarouselProduct} from "./carouselProduct/CarouselProduct";
import style from './NewProduct.module.scss';

export const NewProduct = () => {
    return (
        <div className={style.newProductContainer}>
            <div className={style.title}>New Product</div>
            <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id pretium pellentesque leo. Lorem.</div>
            <CarouselProduct/>
        </div>
    );
};
