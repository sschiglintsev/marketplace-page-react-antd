import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {Product} from "../Product/Product";
import C1 from '../../../assets/images/car_1.png';
import C2 from '../../../assets/images/car_2.png';
import C3 from '../../../assets/images/car_3.png';
import C4 from '../../../assets/images/car_4.png';
import style from './CarouselProduct.module.scss';
const items = [
    {
        id:1,
        urlImage:C1,
        text: 'Alina Velvet Modular Armless',
        price: '£799.00',
        buttonText: 'View Details Products'
    },
    {
        id:2,
        urlImage:C2,
        text: 'Alina Velvet Modular Sectional',
        price: '£699.00',
        buttonText: 'View Details Products'
    },
    {
        id:3,
        urlImage:C3,
        text: 'Serpentine Velvet Sofa',
        price: '£795.00',
        buttonText: 'View Details Products'
    },
    {
        id:4,
        urlImage:C4,
        text: 'Clarion Dining Chair',
        price: '£795.00',
        buttonText: 'View Details Products'
    }, {
        id:5,
        urlImage:C2,
        text: 'Clarion Dining Chair',
        price: '£795.00',
        buttonText: 'View Details Products'
    }
];

export const CarouselProduct = () => {
    const products = items.map(el=>{
        return (
            <Product  key={el.id} urlImage={el.urlImage} price={el.price} text={el.text} buttonText={el.buttonText}/>
        )
    })
    return (
        <div>
            <Carousel className={style.carousel} show={4} slide={3} swiping={true} leftArrow={<IoIosArrowBack size={'2em'}/>} rightArrow={<IoIosArrowForward size={'2em'}/>}>
                {products}
                {/*<Product urlImage={PBW} price={'233'} text={'123123'} buttonText={'View Details Products'}/>*/}
            </Carousel>
        </div>
    );
};
