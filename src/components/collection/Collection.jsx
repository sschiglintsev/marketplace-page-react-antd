import React from 'react';
import style from "./Collection.module.scss";
import COLL1 from '../../assets/images/coll_1.png';
import COLL2 from '../../assets/images/coll_2.png';
import COLL3 from '../../assets/images/coll_3.png';
import COLL4 from '../../assets/images/coll_4.png';
import COLL5 from '../../assets/images/coll_5.png';

export const Collection = () => {
    const photo1 = {
        backgroundImage: 'url(' + COLL1 + ')',
    };
    const photo2 = {
        backgroundImage: 'url(' + COLL2 + ')',
    };
    const photo3 = {
        backgroundImage: 'url(' + COLL3 + ')',
    };
    const photo4 = {
        backgroundImage: 'url(' + COLL4 + ')',
    };
    const photo5 = {
        backgroundImage: 'url(' + COLL5 + ')',
    };
    return (
        <div className={style.collectionContainer}>
            <div className={style.title}>Explore each unique collection</div>
            <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id pretium
                pellentesque leo. Lorem.
            </div>
            <div className={style.collectionBlocks}>
                <div className={style.collBlockOne}>
                    <div className={style.blockOne} style={photo1}>
                        <div className={style.button}>
                            <span className={style.textButton}>Collection 1</span>
                        </div>
                    </div>
                    <div className={style.blockTwo} style={photo2}>
                        <div className={style.button}>
                            <span className={style.textButton}>Collection 2</span>
                        </div>
                    </div>
                </div>
                <div className={style.collBlockTwo}>
                    <div className={style.blockTree} style={photo3}>
                        <div className={style.button}>
                            <span className={style.textButton}>Collection 3</span>
                        </div>
                    </div>
                    <div className={style.blockFour} style={photo4}>
                        <div className={style.button}>
                            <span className={style.textButton}>Collection 4</span>
                        </div>
                    </div>
                    <div className={style.blockFive} style={photo5}>
                        <div className={style.button}>
                            <span className={style.textButton}>Collection 5</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
