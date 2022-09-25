import React from 'react';
import style from './Main.module.scss'
import {Nav} from "./nav/Nav";
import {Header} from "./header/Header";
import {Action} from "./action/Action";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <Header/>
                <Nav/>
                <Action/>
            </div>
        </div>
    );
};
